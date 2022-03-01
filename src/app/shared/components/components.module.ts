import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationBarComponent } from './menu-bar/navigation-bar.component';
import { FeatherIconsModule } from '../feather-icons/feather-icons.module';

@NgModule({
  declarations: [NavigationBarComponent],
  imports: [CommonModule, FeatherIconsModule],
  exports: [NavigationBarComponent],
})
export class ComponentsModule {}
