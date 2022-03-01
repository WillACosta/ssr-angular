import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Photo } from '../../../models/photo.model';

@Injectable()
export class PhotoService {
  constructor(private readonly _httpClient: HttpClient) {}

  getPhotos(): Observable<Photo[]> {
    return this._httpClient.get<Photo[]>(
      'https://api.unsplash.com/photos/?client_id=-ZY5x5KHUPARycAuy2p10egVEYJKD5QIDOy1IWG1GwU'
    );
  }
}
