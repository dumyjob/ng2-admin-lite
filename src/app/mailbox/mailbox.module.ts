import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MailboxComponent } from './mailbox.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { ReadMailComponent } from './read-mail/read-mail.component';
import { WriteMailComponent } from './write-mail/write-mail.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [MailboxComponent, MailListComponent, ReadMailComponent, WriteMailComponent]
})
export class MailboxModule { }
