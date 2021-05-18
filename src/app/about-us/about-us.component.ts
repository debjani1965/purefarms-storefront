import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.titleUpdated.emit("About Purefarms");
  }

}
