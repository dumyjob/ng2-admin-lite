import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class MenuCollapseService {
  private menuOpenSource = new Subject();
  private menuCloseSource = new Subject();

  menuOpen$ = this.menuOpenSource.asObservable();
  menuClose$ = this.menuCloseSource.asObservable();

  constructor() {
  }

  announceClose() {
    this.menuCloseSource.next();
  }

  accepetOpen() {
    this.menuOpenSource.next();
  }
}
