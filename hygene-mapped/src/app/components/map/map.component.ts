import { Component, OnInit, ViewChild } from '@angular/core';

import { DataService } from './../../../services/data.service';
import { Place } from '../../../models/place.model';
import { londonData, ratings } from '../../../data/london.factory';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public isLoading = false;
  public authorities: any;
  public ratings: Array<number>;
  public place: Place;
  public loadedPlaces: Place[];
  public chosenRating: string;
  public chosenAuthority: string;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.authorities = londonData;
    this.ratings = ratings;
  }

  public selectAuthority(auth) {
    this.chosenAuthority = auth;
  }

  public selectRating(rating) {
    this.chosenRating = rating.toString();
  }

  public selectPlaceParams() {
    this.getSelectedPlace(this.chosenRating, this.chosenAuthority);
  }

  public getSelectedPlace(rating: string, authority: string) {
    this.isLoading = true;
    this.data.getLocationData(rating, authority).subscribe(res => {
      this.loadedPlaces = res;
      console.log(this.loadedPlaces);
      this.isLoading = false;
    });
  }
}
