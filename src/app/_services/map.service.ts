import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {} from '@types/googlemaps';

@Injectable()
export class MapService {
  constructor(private db: AngularFireDatabase) {}

  async save(place) {
    console.log(place);
    return await this.db.list('/mexicoLocations').push(place);
  }

  getAll(): Observable<any[]> {
    return this.db
      .list('/mexicoLocations')
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ ...c.payload.val() }));
      });
  }
}
