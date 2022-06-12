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
  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    //this.db.object('locations/0').set({id: 1, photoUrl:"https://www.restocracy.ro/wp-content/uploads/2017/06/Quantic-Club-pub-si-club-in-Grozavesti-13.jpg", locationName:"Quantic Pub", address:"Șoseaua Grozăvești 82, București 060752", musicGenres:["Rock", "Metal"], mapsUrl:"https://goo.gl/maps/KxqxEgheoXKQn7Eh6"});
    //console.log('db');
    this.getStarted();
  }

  ngOnInit(): void {}

  logout(): void {
    this.afAuth.signOut();
  }

  async getStarted() {
    //console.log("GetStarted");
    var locations: Location[];
    locations = [];
    await this.getLocations().then((value) => {
      locations = value as Location[];
    });

    this.locationsList = locations;
    //console.log(this.locationsList);
    this._id = this.locationsList.length + 1;
  }

  getLocations() {
    //console.log("getLocations");
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
    var data = {
      id: this._id,
      photoUrl: this._photoUrl,
      locationName: this._locationName,
      musicGenres: this._musicGenres,
      mapsUrl: this._mapsUrl,
      locationAddress : this._locationAddress
    };
    await this.db.object('locations/' + (this._id - 1)).set(data);
    await this.getStarted();
    this.clearFields();
  }

  clearFields() {
    this._locationName = '';
    this._mapsUrl = '';
    this._mg = '';
    this._photoUrl = '';
  }
}

class Location {
  id: number | undefined;
  photoUrl: string | undefined;
  locationName: string | undefined;
  address: string | undefined;
  musicGenres: string[] | undefined;
  mapsUrl: string | undefined;
}
