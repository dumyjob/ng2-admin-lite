import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Mail } from './mail';

@Injectable()
export class MailService {

  private mailUrl:string = "app/mails";

  constructor(private http:Http) {
  }

  getMails() :Promise<Mail[]> {

    return this.http
      .get(this.mailUrl)
      .toPromise()
      .then(resp => resp.json().data as Mail[])
      .catch(this.handelError);
  }



  handelError(error:any) :Promise<any>{

    return Promise.reject(error.message || error);
  }

}
