import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { WidgetsComponent } from './widgets.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [WidgetsComponent]
})
export class WidgetsModule { }
