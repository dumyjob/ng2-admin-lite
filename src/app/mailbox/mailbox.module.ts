import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MailboxComponent } from './mailbox.component';
import { MailListComponent } from './mail-list/mail-list.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [MailboxComponent, MailListComponent]
})
export class MailboxModule { }
