import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoComponent } from './info/info.component';
import { BuildsComponent } from './builds/builds.component';
import { ProductsService } from './_services/products.service';
import { CpuComponent } from './_product-components/cpu/cpu.component';
import { PricesDisplayComponent } from './prices-display/prices-display.component';
import { CpusComponent } from './_product-components/cpus/cpus.component';
import { PricesService } from './_services/prices.service';
import { MotherboardComponent } from './_product-components/motherboard/motherboard.component';
import { MotherboardsComponent } from './_product-components/motherboards/motherboards.component';
import { ProductsListComponent } from './_product-components/products-list/products-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfiguratorComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    InfoComponent,
    BuildsComponent,
    CpuComponent,
    PricesDisplayComponent,
    CpusComponent,
    MotherboardComponent,
    MotherboardsComponent,
    ProductsListComponent
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
        { path: 'builds', component: BuildsComponent },
        { path: 'cpu/:id', component: CpuComponent },
        { path: 'cpus', component: CpusComponent },
        { path: "motherboard/:id", component: MotherboardComponent },
        { path: "motherboards", component: MotherboardsComponent }
      ]
    ),
    HttpClientModule
  ],
  providers: [
    ProductsService,
    PricesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
