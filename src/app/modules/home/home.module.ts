import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HomeResolver } from './services/home.resolver';

import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { SharedModule } from '../../shared/shared.module';
import { HomePresentationComponent } from './components/home-presentation/home-presentation.component';

import { PhotoService } from './services/photo.service';
import { SearchPhotosService } from './services/search-photos.service';

@NgModule({
  declarations: [HomeComponent, PhotoCardComponent, HomePresentationComponent],
  imports: [CommonModule, HomeRoutingModule, HttpClientModule, SharedModule],
  providers: [PhotoService, SearchPhotosService, HomeResolver],
})
export class HomeModule {}
