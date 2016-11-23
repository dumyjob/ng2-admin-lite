import { Injectable } from '@angular/core';
import { Headers,Http }    from '@angular/http';

import { Menu } from './menu';


@Injectable()
export class MenuService {

  private menusUrl = 'app/menus';

  private header = new Headers({'Content-Type':'application/json'});

  constructor(private http :Http) {

  }

  getMenus() :Promise<Menu[]> {

    return this.http
      .get(this.menusUrl)
      .toPromise()
      .then(response => response.json().data as Menu[])
      .catch(this.handleError);
  }


  handleError(error :any) :Promise<any> {

    return Promise.reject(error.message || error);
  }



}
