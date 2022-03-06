import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  photos: Photo[];

  constructor(private readonly _route: ActivatedRoute) {}

  ngOnInit() {
    this.photos = this._route.snapshot.data['photos'];
  }
}
