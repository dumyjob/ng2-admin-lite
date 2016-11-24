import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lite-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  isCollapsed = false;

  controlSidebar = false;

  constructor() { }

  ngOnInit() {
  }

  /**
   * mini sidebar-menu
   */
  collapse() : void {
    this.isCollapsed = true;
  }

  /**
   * restore sidebar-menu
   */
  open() :void {
    this.isCollapsed = false;
  }

  onCollapse() :void {

    if(this.isCollapsed){

      console.log("1 2 open!");
      this.open();
    }else {

      console.log("1 2 collapse!");
      this.collapse();
    }
  }


  /**
   * open control-sidebar
   */
  controlOpen() :void {
    this.controlSidebar = true;
  }

  /**
   * close control-sidebar
   */
  controlClose() : void {
    this.controlSidebar = false;
  }

  onControl() :void {

    if(this.controlSidebar){
      console.log("1 2 close control-sidebar!");
      this.controlClose();
    }else {
      console.log("1 2 open control-sidebar!");
      this.controlOpen();
    }
  }

}
