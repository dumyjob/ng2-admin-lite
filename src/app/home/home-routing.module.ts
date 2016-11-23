import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashComponent }   from '../dashboard/dash/dash.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { WidgetsComponent }   from '../widgets/widgets.component';
import { IconsComponent }   from '../ui/icons/icons.component';
import { ButtonsComponent } from '../ui/buttons/buttons.component';
import { GeneralComponent } from '../ui/general/general.component';
import { ModalsComponent } from '../ui/modals/modals.component';
import { SlidersComponent } from '../ui/sliders/sliders.component';
import { TimelineComponent } from '../ui/timeline/timeline.component';

import { CalendarComponent }   from '../calendar/calendar.component';
import { MailboxComponent }   from '../mailbox/mailbox.component';
import { MailListComponent } from '../mailbox/mail-list/mail-list.component';
import { ReadMailComponent } from '../mailbox/read-mail/read-mail.component';
import { WriteMailComponent } from '../mailbox/write-mail/write-mail.component';
import { ProfileComponent } from '../examples/profile/profile.component';
import { InvoiceComponent } from '../examples/invoice/invoice.component';
import { Error404Component } from '../examples/error-404/error-404.component';
import { Error500Component } from '../examples/error-500/error-500.component';
import { BlankComponent } from '../examples/blank/blank.component';
import { PaceComponent } from '../examples/pace/pace.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:"home",
        component: HomeComponent,
        children:[
          {
            path: '',
            component: DashComponent
          },
          {
            path: 'dash',
            component: DashComponent
          },
          {
            path: 'dashboard',
            component: DashboardComponent
          },
          {
            path: 'widgets',
            component: WidgetsComponent
          },
          {
            path:'ui',
            children:[
              {
                path: 'icons',
                component: IconsComponent
              },
              {
                path: 'buttons',
                component: ButtonsComponent
              },
              {
                path: 'general',
                component: GeneralComponent
              },
              {
                path: 'modals',
                component: ModalsComponent
              },
              {
                path: 'sliders',
                component: SlidersComponent
              },
              {
                path: 'timeline',
                component: TimelineComponent
              }
            ]
          },
          {
            path: 'forms'
          },
          {
            path: 'calendar',
            component: CalendarComponent
          },
          {
            path: 'mailbox',
            component: MailboxComponent,
            children:[
              {
                path:'',
                component:MailListComponent
              },
              {
                path:'compose',
                component:WriteMailComponent
              },
              {
                path:':id',
                component:ReadMailComponent
              }
            ]
          },
          {
            path: 'examples',
            children:[
              {
                path: 'invoice',
                component: InvoiceComponent
              },
              {
                path: 'profile',
                component: ProfileComponent
              },
              {
                path: '404',
                component: Error404Component
              },
              {
                path: '500',
                component: Error500Component
              },
              {
                path: 'blank',
                component: BlankComponent
              },
              {
                path: 'pace',
                component: PaceComponent
              }
            ]
          }

        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {
}



