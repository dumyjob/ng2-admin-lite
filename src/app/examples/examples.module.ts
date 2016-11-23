import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ExamplesComponent } from './examples.component';
import { BlankComponent } from './blank/blank.component';
import { ProfileComponent } from './profile/profile.component';
import { Error404Component } from './error-404/error-404.component';
import { Error500Component } from './error-500/error-500.component';
import { PaceComponent } from './pace/pace.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ExamplesComponent,
    BlankComponent,
    ProfileComponent,
    Error404Component,
    Error500Component,
    PaceComponent,
    InvoiceComponent
  ]
})
export class ExamplesModule { }
