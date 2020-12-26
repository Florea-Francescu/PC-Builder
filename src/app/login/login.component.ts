import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('emailInput') email;
  @ViewChild('passwordInput') pass;
  constructor(public auth: AuthenticationService) { }

  ngOnInit(): void {
  }
  glogin(){
    this.auth.glogin();
  }
  login()
  {
    this.auth.SignIn(this.email.value,this.pass.value);
  }

}
