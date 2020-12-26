import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('emailInput') email;
  @ViewChild('passwordInput') pass;
  constructor(public auth: AuthenticationService) { }

  ngOnInit(): void {
  }
  SignUp(){
    this.auth.SignUp(this.email.value,this.pass.value);
  }

}
