import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';

import { PhotoService } from './services/photo.service';
import { HomePresentationComponent } from './components/home-presentation/home-presentation.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, PhotoCardComponent, HomePresentationComponent],
  imports: [CommonModule, HomeRoutingModule, HttpClientModule, SharedModule],
  providers: [PhotoService],
})
export class HomeModule {}
