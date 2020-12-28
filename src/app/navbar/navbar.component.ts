import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AuthenticationService } from '../_services/authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  collapsed=true;
  user: firebase.default.User;
  constructor(private afAuth: AngularFireAuth, private af: AuthenticationService) {
    afAuth.authState.subscribe(user => this.user = user);
   }

  ngOnInit(): void {
  }
  logout(){
    this.afAuth.signOut();
    this.af.logout();
  }

}
