import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { CalendarModule } from '../calendar/calendar.module';
import { ChartsModule } from '../charts/charts.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { DocumentModule } from '../document/document.module';
import { ExamplesModule } from '../examples/examples.module';
import { MailboxModule } from '../mailbox/mailbox.module';
import { UiModule } from '../ui/ui.module';
import { WidgetsModule } from '../widgets/widgets.module';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ControlComponent } from './control/control.component';
import { SearchComponent } from './sidebar/search/search.component';
import { UserPanelComponent } from './sidebar/user-panel/user-panel.component';
import { SidebarMenusComponent } from './sidebar/sidebar-menus/sidebar-menus.component';
import { MenuItemComponent } from './sidebar/menu-item/menu-item.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    CalendarModule,
    ChartsModule,
    DashboardModule,
    DocumentModule,
    ExamplesModule,
    MailboxModule,
    UiModule,
    WidgetsModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ControlComponent,
    SearchComponent,
    UserPanelComponent,
    SidebarMenusComponent,
    MenuItemComponent
  ]
})
export class HomeModule { }
