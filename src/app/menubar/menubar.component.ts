import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from '../categories/category';
import { CategoryService } from '../categories/category.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  isShow: Boolean = false;
  categories: Category[] = [];
  
  constructor(private categoryService: CategoryService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories) => {
      console.log(categories)
      this.categories = categories;
    })
  }

  showMenu(sidenav: HTMLElement) {  
    this.sharedService.showMenu(sidenav);
  }
  
  hideMenu(sidenav: HTMLElement, categoryName: string) {
    this.sharedService.hideMenu(sidenav);
    if(categoryName != '') {
      this.onSelectMenuItem(categoryName);
    }    
  }

  onSelectMenuItem(categoryName ) {
    this.sharedService.titleUpdated.emit(categoryName);
  }
}
