import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PhotoService } from './services/photo.service';
import { ListPhotosQuery, Photo } from '../../models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  photos$: Observable<Photo[]>;

  constructor(private readonly _photoService: PhotoService) {}

  ngOnInit() {
    this.photos$ = this._photoService.getPhotos(new ListPhotosQuery());
  }
}
