import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoComponent } from './info/info.component';
import { BuildsComponent } from './builds/builds.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfiguratorComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    InfoComponent,
    BuildsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: '', component: InfoComponent },
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignupComponent },
        { path: 'configurator', component: ConfiguratorComponent },
        { path: 'builds', component: BuildsComponent }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
