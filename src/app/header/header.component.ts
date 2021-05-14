import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { MenubarComponent } from '../menubar/menubar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount: Number = 0;
  @ViewChild(MenubarComponent) private menu: MenubarComponent;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }
  
  hideSideMenu() {
    
  }
}
