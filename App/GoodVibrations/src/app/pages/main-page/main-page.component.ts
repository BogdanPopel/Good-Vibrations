import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFireDatabase,
  AngularFireDatabaseModule,
} from '@angular/fire/compat/database';
import 'firebase/database';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  public locationsList: Location[] | undefined;
  public _id!: number;
  public _photoUrl: string | undefined;
  public _locationName: string | undefined;
  public _locationAddress: string | undefined;
  public _musicGenres: string[] | undefined;
  public _mg: string | undefined;
  public _mapsUrl: string | undefined;
  public _volume!: number;
  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.getStarted();
  }

  ngOnInit(): void {}

  logout(): void {
    this.afAuth.signOut();
  }

  async getStarted() {
    var locations: Location[];
    locations = [];
    await this.getLocations().then((value) => {
      locations = value as Location[];
    });

    this.locationsList = locations;

    this._id = this.locationsList.length + 1;
    //this.clearFields();
  }

  getLocations() {
    return new Promise((resolve, reject) => {
      this.db
        .list('locations')
        .valueChanges()
        .subscribe((value) => {
          resolve(value);
        });
    });
  }

  async addLocation() {

    this._musicGenres = this._mg?.split(',');
    if (this._volume > 10) {
      this._volume = 10;
    }
    if (this._volume < 0) {
      this._volume = 0;
    }
    if ( this._photoUrl == ''){
      this._photoUrl = ' ';
    }
    if ( this._mapsUrl == ''){
      this._mapsUrl = ' ';
    }
    var data = {
      id: this._id,
      photoUrl: this._photoUrl,
      locationName: this._locationName,
      address: this._locationAddress,
      musicGenres: this._musicGenres,
      mapsUrl: this._mapsUrl,
      locationAddress: this._locationAddress,
      volumeRating: this._volume,
    };
    await this.db.object('locations/' + (this._id - 1)).set(data);
    await this.getStarted();
    this.clearFields();
  }

  clearFields() {
    this._locationName = '';
    this._mapsUrl = ' ';
    this._mg = '';
    this._photoUrl = ' ';
    this._locationAddress = '';
    this._volume = 0;
  }

}

class Location {
  id: number | undefined;
  photoUrl: string | undefined;
  locationName: string | undefined;
  address: string | undefined;
  musicGenres: string[] | undefined;
  mapsUrl: string | undefined;
  volumeRating: number | undefined;
}
