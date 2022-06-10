import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-recommandation-page',
  templateUrl: './recommandation-page.component.html',
  styleUrls: ['./recommandation-page.component.css']
})
export class RecommandationPageComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

    ngOnInit(): void {
    }

    logout(): void {
        this.afAuth.signOut();
    }


}
