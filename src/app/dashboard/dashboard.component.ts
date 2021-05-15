import { Component, OnInit } from '@angular/core';
import { Category } from '../categories/category';
import { CategoryService } from '../categories/category.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      categories.forEach((item, index) => {
          console.log(item, index)
      })
    })
  }

}
