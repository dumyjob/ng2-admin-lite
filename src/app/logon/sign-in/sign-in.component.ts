import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lite-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  authMsg :string;

  constructor() { }

  ngOnInit() {
  }

}
