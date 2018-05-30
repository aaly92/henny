import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hny-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  public locations = [
    {
      label: 'Parque Chapultepeca',
      latitude: 19.419481,
      longitude: -99.189456,
      url: '',
    },
    {
      label: 'Bósforo',
      latitude: 19.4330942,
      longitude: -99.1448319,
      url: '',
    },
  ];
  constructor() {}

  zoom = 12;

  lat = 19.419481;
  lng = -99.189456;

  ngOnInit() {
    console.log(this.locations);
  }
}
