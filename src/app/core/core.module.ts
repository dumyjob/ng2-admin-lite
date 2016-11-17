import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { CommonModule }      from '@angular/common';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { TimeAgoPipe } from './time-ago.pipe';
import './rxjs-extensions'


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  exports: [
    TimeAgoPipe
  ],
  declarations: [
    TimeAgoPipe
  ],
  providers: [
  ]
})
export class CoreModule {

  //禁止多次导入coreModule
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
