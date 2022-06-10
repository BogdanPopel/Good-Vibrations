import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

    ngOnInit(): void {
    }

    logout(): void {
        this.afAuth.signOut();
    }


}
