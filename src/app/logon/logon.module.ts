import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LogonRoutingModule } from './logon-routing.module';
import { LogonComponent } from './logon.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';

@NgModule({
  imports: [
    SharedModule,
    LogonRoutingModule
  ],
  declarations: [
    LogonComponent,
    SignInComponent,
    SignUpComponent,
    LockScreenComponent
  ]
})
export class LogonModule { }
