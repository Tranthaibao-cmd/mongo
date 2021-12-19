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
  ngOnInit(): void {
  }
  
}
