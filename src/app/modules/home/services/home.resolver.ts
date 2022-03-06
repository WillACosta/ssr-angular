import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';

import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { first, Observable, of, tap } from 'rxjs';

import { Photo, ListPhotosQuery } from '../../../models';
import { PhotoService } from './photo.service';

@Injectable()
export class HomeResolver implements Resolve<Photo[]> {
  constructor(
    private readonly _photoService: PhotoService,
    private readonly _transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Photo[] | Observable<Photo[]> | Promise<Photo[]> {
    const PHOTOS_LIST_KEY = makeStateKey<Photo[]>('photosListKey');

    if (this._transferState.hasKey(PHOTOS_LIST_KEY)) {
      const stateValue = this._transferState.get(PHOTOS_LIST_KEY, []);
      this._transferState.remove(PHOTOS_LIST_KEY);
      return of(stateValue);
    } else {
      return this._photoService.getPhotos(new ListPhotosQuery()).pipe(
        first(),
        tap((photos) => {
          if (isPlatformServer(this.platformId)) {
            this._transferState.set(PHOTOS_LIST_KEY, photos);
          }
        })
      );
    }
  }
}
