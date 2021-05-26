import { Component, OnInit } from '@angular/core';
import { Category } from '../categories/category';
import { CategoryService } from '../categories/category.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryService: CategoryService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.titleUpdated.emit("Purefarms");
    this.categoryService.getCategories().subscribe((categories) => {
      categories.forEach((item, index) => {
          console.log(item, index)
      })
    })
  }

}
