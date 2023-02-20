import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { Photo } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  photos: Photo[];

  constructor(
    private readonly _route: ActivatedRoute,
    private _title: Title,
    private _meta: Meta
  ) {}

  ngOnInit() {
    this.setMetaTags();
    this.photos = this._route.snapshot.data['photos'];
  }

  trackByPhotoId(index: number) {
    return index;
  }

  private setMetaTags() {
    this._title.setTitle('SSR Angular Photo Gallery');
    this._meta.addTags([
      { name: 'description', content: 'Angular SSR Photo Gallery' },
      { name: 'author', content: 'Will' },
      { name: 'keywords', content: 'angular, ssr, unsplash, gallery, photo' },
    ]);
  }
}
