import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ChartsComponent } from './charts.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ChartsComponent]
})
export class ChartsModule { }
