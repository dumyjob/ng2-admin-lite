import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { RouterModule } from '@angular/router';

//ng-lighting
import { NglModule } from 'ng-lightning/ng-lightning';

//ng2-bootstrap module
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ProgressbarModule } from 'ng2-bootstrap/ng2-bootstrap';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';
import { CollapseModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    DropdownModule,
    ModalModule,
    AlertModule,
    ProgressbarModule,
    CarouselModule,
    CollapseModule,
    NglModule,
    RouterModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    TabsModule,
    ModalModule,
    AlertModule,
    ProgressbarModule,
    CarouselModule,
    CollapseModule,
    NglModule,
    RouterModule
  ]
})
export class SharedModule { }
