import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DocumentComponent } from './document.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DocumentComponent]
})
export class DocumentModule { }
