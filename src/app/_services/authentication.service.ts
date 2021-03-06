import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isLoggedIn = false;
  user;

  constructor(public afAuth: AngularFireAuth, private route: ActivatedRoute) {
   
   }

  glogin(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.signInWithRedirect(new firebase.default.auth.GoogleAuthProvider());
  }

  SignUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert("You have been successfully registered!");
        this.isLoggedIn = true;
        this.user = result.user;
        console.log(result.user)
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  SignIn(email: string, password: string) {
   this.afAuth.signInWithEmailAndPassword(email, password)
      .then(
        result => {
          this.isLoggedIn = true;
          this.user = result.user;
          console.log(result.user);
        }).catch((error) => {
          window.alert(error.message)
        });
  }

  getLoggedUser(): string {
    return this.user;
  }
  
  logout(){
    this.isLoggedIn = false;
    this.user = null;
  }

  loginStatus(){
    return this.afAuth.user;
  }
}
