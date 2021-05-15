import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount: Number = 0;
  headerTitle: string = "Purefarms";
  constructor(private sharedService: SharedService) { 
    this.sharedService.titleUpdated.subscribe((title) => {
      this.headerTitle = title;
    });
    
  }

  ngOnInit(): void {
  }
}
