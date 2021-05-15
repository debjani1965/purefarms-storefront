import { Injectable, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sideNav:HTMLElement;
  titleUpdated = new EventEmitter<string>();
  hideSideMenu = new EventEmitter();
  constructor() { }

  showMenu(sidenav: HTMLElement) {  
    sidenav.className = "menu-list menu-list-width";
  }
  
  hideMenu(sidenav) {
    console.log(sidenav)
    sidenav.className = "menu-list";
  }
}
