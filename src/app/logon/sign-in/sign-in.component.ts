import { Component, OnInit,
  trigger,
  state,
  style,
  transition,
  animate,
  group
} from '@angular/core';

@Component({
  selector: 'lite-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  animations: [trigger('inOut',[
    transition('void => *', [
      style({width: 10, transform: 'translateX(50px)', opacity: 0}),
      group([
        animate('0.3s 0.1s ease', style({
          transform: 'translateX(0)',
          width: 120
        })),
        animate('0.3s ease', style({
          opacity: 1
        }))
      ])
    ]),
    transition('* => void', [
      animate("0.3s ease",style({
        transform: 'translate(0)',
      }))
    ])
  ])]
})
export class SignInComponent implements OnInit {


  authMsg :string;

  constructor() { }

  ngOnInit() {
  }

}
