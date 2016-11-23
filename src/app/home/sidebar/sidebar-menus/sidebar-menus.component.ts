import { Component, OnInit } from '@angular/core';

import { Menu } from '../../../core/menu';
import { MenuService } from "../../../core/menu.service";
import { MenuCollapseService } from '../menu-collapse.service';

@Component({
  selector: 'lite-sidebar-menus',
  templateUrl: './sidebar-menus.component.html',
  styleUrls: ['./sidebar-menus.component.css'],
  providers: [
    MenuCollapseService,
    MenuService
  ]
})
export class SidebarMenusComponent implements OnInit {

  header = "MAIN NAVIGATION";
  menus : Menu[];


  constructor( private menuService :MenuService,
               private menuCollapseService :MenuCollapseService) {

    menuCollapseService.menuOpen$.subscribe( () => {

      menuCollapseService.announceClose();
    });
  }

  ngOnInit() {

    this.getMenus();
  }

  getMenus() :void {

    this.menuService.getMenus().then(menus => this.menus = menus);
  }

}
