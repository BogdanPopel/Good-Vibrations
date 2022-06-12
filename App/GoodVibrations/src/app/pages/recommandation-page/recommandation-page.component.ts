import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-recommandation-page',
  templateUrl: './recommandation-page.component.html',
  styleUrls: ['./recommandation-page.component.css'],
})
export class RecommandationPageComponent implements OnInit {
  public locationsList!: Location[];
  public locationsListLucky!: Location[];

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.getStarted();
  }

  ngOnInit(): void {}

  async getStarted() {
    var locations: Location[];
    locations = [];
    await this.getLocations().then((value) => {
      locations = value as Location[];
    });

    this.locationsList = locations;

    var index = Math.floor(Math.random() * this.locationsList.length);

    this.locationsListLucky = [this.locationsList[index]];
    console.log(this.locationsListLucky, index);
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

  logout(): void {
    this.afAuth.signOut();
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
