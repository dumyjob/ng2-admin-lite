import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lite-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  @Input()isOpen = false;

  constructor() { }

  ngOnInit() {
  }

}
