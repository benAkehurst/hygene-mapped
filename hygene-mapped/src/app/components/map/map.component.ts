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
  public lat = 51.642102;
  public lng = -0.167059;
  public defZoom = 9;
  public markers: Array<any> = [];

  constructor(private data: DataService) {}

  ngOnInit() {
  }

  public generateMap() {
    this.markers = this.data.selectedOptions;
    console.log(this.markers);
  }
}
