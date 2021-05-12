import { Component, OnInit } from '@angular/core';
import { Category } from '../categories/category';
import { CategoryService } from '../categories/category.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  categories: Category[] = [];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      console.log(categories)
      this.categories = categories;
    })
  }

}