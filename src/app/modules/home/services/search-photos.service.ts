import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Photo, SearchPhotosQuery } from '../../../models';

@Injectable()
export class SearchPhotosService {
  constructor(private readonly _httpClient: HttpClient) {}

  getPhotos(query: SearchPhotosQuery): Observable<any> {
    return this._httpClient.get<Photo[]>(
      `${environment.unsplashApi}/search/photos?query=${query}`
    );
  }
}
