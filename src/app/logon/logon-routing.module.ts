import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogonComponent } from './logon.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:'logon',
        component: LogonComponent,
        children:[
          {
            path: "",
            component: SignInComponent
          },
          {
            path: "login",
            component: SignInComponent
          },
          {
            path: "register",
            component: SignUpComponent
          },
          {
            path: "lock",
            component: LockScreenComponent
          },
          {
            path: "recover",
            component: ForgetPasswordComponent
          }
        ]
      }
    ])
  ],
  exports: []
})
export class LogonRoutingModule {
}


