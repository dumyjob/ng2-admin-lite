import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UiComponent } from './ui.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [UiComponent]
})
export class UiModule { }
