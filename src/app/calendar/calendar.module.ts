import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CalendarComponent } from './calendar.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    CalendarComponent
  ]
})
export class CalendarModule { }
