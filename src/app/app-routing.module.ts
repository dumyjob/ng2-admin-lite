import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path:"",
        redirectTo:"/logon/sign-in",
        pathMatch:"full"
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

