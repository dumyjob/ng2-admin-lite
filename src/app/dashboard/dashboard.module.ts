import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashComponent } from './dash/dash.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [DashboardComponent, DashComponent]
})
export class DashboardModule { }
