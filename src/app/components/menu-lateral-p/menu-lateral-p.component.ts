import { Component, OnInit } from '@angular/core';
import { menuList } from './lista-menu';

@Component({
  selector: 'menu-lateral-p',
  templateUrl: './menu-lateral-p.component.html',
  styleUrls: ['./menu-lateral-p.component.css']
})

export class MenuLateralPComponent implements OnInit 
{
  sideMenu = menuList;
  collapse = true;
  constructor() {}
  ngOnInit(): void {}
  toggleSidebar() 
  {
    this.collapse = !this.collapse;
  }
}
