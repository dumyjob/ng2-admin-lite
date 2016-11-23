import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { Mail } from '../../core/mail';
import { MailService } from '../../core/mail.service';

@Component({
  selector: 'lite-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {

  box :String;
  mails :Mail[];

  constructor( private route :ActivatedRoute,
               private router :Router,
               private mailService :MailService) { }

  ngOnInit() {
    this.route.params.forEach( (params :Params) => {

      let box = params['box'];
      this.box = box == undefined ?'Inbox':box;
      //TODO query box mails
    });

    this.getMails();
  }


  getMails() :void {

    this.mailService.getMails()
      .then( mails => this.mails = mails);
  }


  readMail(mail :Mail) {

    this.router.navigate([mail.id],{relativeTo: this.route})
  }
}
