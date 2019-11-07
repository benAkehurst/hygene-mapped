import { Component, OnInit } from '@angular/core';

import { DataService } from './../../../services/data.service';
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

  constructor(public data: DataService) {}

  ngOnInit() {}

  public generateMap() {
    this.markers = this.data.selectedOptions;
    console.log(this.markers);
  }

  public clearMarkers() {
    this.markers = [];
  }
}
