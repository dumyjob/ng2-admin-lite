import { Component, OnInit ,Input, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription }   from 'rxjs/Subscription';


import { Menu } from '../../../core/menu';
import { Util } from '../../../core/util';
import { MenuCollapseService } from '../menu-collapse.service';

@Component({
  selector: 'lite-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit,OnDestroy {

  @Input()menu :Menu;

  isOpen = false;

  subscription: Subscription;

  constructor(private route :ActivatedRoute,
              private router :Router,
              private menuCollapseService :MenuCollapseService) {
    this.subscription = menuCollapseService.menuClose$.subscribe(() =>{

      //接受到关闭消息
      this.close();
    });
  }

  ngOnInit() {
  }


  ngOnDestroy(): void {
    //退订
    this.subscription.unsubscribe();
  }

  setClasses() {
    let classes = {

      treeview: !this.menu.isLeaf,
      active: this.isOpen
    };

    return classes;
  }


  close() :void{

    if(this.hasChild() && this.isOpen){

      console.log("1 2 close!");
      this.isOpen = false;
    }
  }

  open() :void{

    if(this.hasChild() && !this.isOpen){

      console.log("1 2 open!");
      this.isOpen = true;
    }
  }

  onOpen() :void{

    if(this.hasChild()){

      //打开/关闭菜单项
      if(this.isOpen){

        this.close();
      }else {
        //通知其他菜单关闭
        this.menuCollapseService.accepetOpen();

        this.open();
      }
    }else {

      //打开页面
      this.router.navigate([this.menu.location],{relativeTo:this.route});
    }
  }

  hasChild() :boolean {

    let hasChild = false;
    if(!Util.isEmpty(this.menu.children)){
      hasChild = true;
    }
    return hasChild;
  }
}
