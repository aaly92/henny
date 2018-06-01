import {
  Component,
  OnInit,
  NgZone,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { MapService } from '../_services/map.service';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '../_models/location.model';

@Component({
  selector: 'hny-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  public lat: number;
  public long: number;
  public searchControl: FormControl;
  public zoom: number;

  public locations = [];
  public locationSubscription: Subscription;

  @ViewChild('search') public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private mapService: MapService,
  ) {
    this.locationSubscription = this.mapService
      .getAll()
      .subscribe(locations => {
        this.locations = locations;
      });
  }

  ngOnInit() {
    this.lat = 19.419481;
    this.long = -99.189456;
    this.zoom = 12;

    this.searchControl = new FormControl();

    this.setCurrentPosition();

    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(
        this.searchElementRef.nativeElement,
        {
          types: ['address'],
        },
      );
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          this.mapService.save(
            new Location(
              place.name,
              place.geometry.location.lng(),
              place.geometry.location.lat(),
            ),
          );
        });
      });
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}
