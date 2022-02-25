import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TransferState } from '@angular/platform-browser';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  photos$: any;

  constructor(
    private readonly _http: HttpClient,
    private state: TransferState
  ) {}

  ngOnInit() {
    this.photos$ = this.getPhotos();
  }

  private getPhotos(): Observable<any> {
    return this._http.get(
      'https://api.unsplash.com/photos/?client_id=-ZY5x5KHUPARycAuy2p10egVEYJKD5QIDOy1IWG1GwU'
    );
  }

}
