import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Photo, ListPhotosQuery, RandomPhotoQuery } from '../../../models';

@Injectable()
export class PhotoService {
  constructor(private readonly _httpClient: HttpClient) {}

  getPhotos(query: ListPhotosQuery): Observable<Photo[]> {
    return this._httpClient.get<Photo[]>(
      `${this.endpointUrl}${query.toQueryParams}`
    );
  }

  getRandomPhotos(query: RandomPhotoQuery): Observable<Photo[]> {
    return this._httpClient.get<Photo[]>(
      `${this.endpointUrl}/random?count=${query.count}`
    );
  }

  getPhoto(id: string) {
    return this._httpClient.get<Photo>(`${this.endpointUrl}/${id}`);
  }

  private get endpointUrl(): string {
    return `${environment.unsplashApi}/photos?client_id=${environment.unsplashAccessKey}`;
  }
}
