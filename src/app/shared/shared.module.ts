import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherIconsModule } from './feather-icons/feather-icons.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ComponentsModule, FeatherIconsModule],
  exports: [FeatherIconsModule, ComponentsModule],
})
export class SharedModule {}
