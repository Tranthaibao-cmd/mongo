import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public selected = false;
  public href;
  public menuItems;
  showItemLink: boolean = false;
  chin:string='';
  constructor() { }
  'config': {
    mainMenu: 'config',
    selected: false,
    subMenu: [
      {
        name: 'Nhân Viên',
        url: '/config/nhanvien',
      },
      {
        name: 'Khách Hàng',
        url: '/config/khachhang',
      },
  
     
    ],
  }
  ngOnInit(): void {
  }
  toggleMenu(menu, selected) {
    console.log(menu, selected)
    for (let item of this.menuItems) {
      if (item.mainMenu == menu) {
        item.selected = !selected;
        continue;
      } else {
        item.selected = false;
      }
    }
    console.log(this.menuItems)
  }
}
