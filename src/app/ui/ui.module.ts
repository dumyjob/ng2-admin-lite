import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UiComponent } from './ui.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { GeneralComponent } from './general/general.component';
import { IconsComponent } from './icons/icons.component';
import { ModalsComponent } from './modals/modals.component';
import { SlidersComponent } from './sliders/sliders.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [UiComponent, ButtonsComponent, GeneralComponent, IconsComponent, ModalsComponent, SlidersComponent, TimelineComponent]
})
export class UiModule { }
