import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sideNav:HTMLElement;
  constructor() { }

  showMenu(sidenav: HTMLElement) {  
    sidenav.className = "menu-list menu-list-width";
  }
  
  hideMenu(sidenav) {
    sidenav.className = "menu-list";
  }
}
