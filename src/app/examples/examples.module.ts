import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ExamplesComponent } from './examples.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ExamplesComponent]
})
export class ExamplesModule { }
