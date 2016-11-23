import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'lite-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onCollapse = new EventEmitter<void>();

  @Output() onControlClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  collapse() :void {
    this.onCollapse.emit();
  }

  control() :void {
    this.onControlClick.emit();
  }

}
