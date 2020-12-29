import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment';

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
import { PricesDisplayComponent } from './_product-components/prices-display/prices-display.component';
import { CpusComponent } from './_product-components/cpus/cpus.component';
import { PricesService } from './_services/prices.service';
import { MotherboardComponent } from './_product-components/motherboard/motherboard.component';
import { MotherboardsComponent } from './_product-components/motherboards/motherboards.component';
import { ProductsListComponent } from './_product-components/products-list/products-list.component';
import { MemoryComponent } from './_product-components/memory/memory.component';
import { MemoriesComponent } from './_product-components/memories/memories.component';
import { StoragesComponent } from './_product-components/storages/storages.component';
import { StorageComponent } from './_product-components/storage/storage.component';
import { GpusComponent } from './_product-components/gpus/gpus.component';
import { GpuComponent } from './_product-components/gpu/gpu.component';
import { CasesComponent } from './_product-components/cases/cases.component';
import { CaseComponent } from './_product-components/case/case.component';
import { PsusComponent } from './_product-components/psus/psus.component';
import { PsuComponent } from './_product-components/psu/psu.component';
import { ConfiguratorProductComponent } from './configurator-product/configurator-product.component';
import { AuthenticationService } from './_services/authentication.service';
 
import { MyBuildsComponent } from './my-builds/my-builds.component';

import { CoolersComponent } from './_product-components/coolers/coolers.component';
import { CoolerComponent } from './_product-components/cooler/cooler.component';
import { OthersComponent } from './_product-components/others/others.component';
import { OtherComponent } from './_product-components/other/other.component';
import { ViewBuildsComponent } from './view-builds/view-builds.component';



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
    ProductsListComponent,
    MemoryComponent,
    MemoriesComponent,
    StoragesComponent,
    StorageComponent,
    GpusComponent,
    GpuComponent,
    CasesComponent,
    CaseComponent,
    PsusComponent,
    PsuComponent,
    ConfiguratorProductComponent,

    MyBuildsComponent,

    CoolersComponent,
    CoolerComponent,
    OthersComponent,
    OtherComponent,
    ViewBuildsComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forRoot(
      [
        { path: '', component: InfoComponent },
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignupComponent },
        { path: 'my-builds', component: MyBuildsComponent },
        { path: 'configurator', component: ConfiguratorComponent },
        { path: 'builds', component: BuildsComponent },
        { path: 'cpu/:id', component: CpuComponent },
        { path: 'cpus', component: CpusComponent },
        { path: "motherboard/:id", component: MotherboardComponent },
        { path: "motherboards", component: MotherboardsComponent },
        { path: "memory/:id", component: MemoryComponent },
        { path: "memories", component: MemoriesComponent },
        { path: "storage/:id", component: StorageComponent },
        { path: "storages", component: StoragesComponent },
        { path: "gpu/:id", component: GpuComponent },
        { path: "gpus", component: GpusComponent },
        { path: "case/:id", component: CaseComponent },
        { path: "cases", component: CasesComponent },
        { path: "psu/:id", component: PsuComponent },
        { path: "psus", component: PsusComponent },
        { path: "cooler/:id", component: CoolerComponent },
        { path: "coolers", component: CoolersComponent },
        { path: "other/:id", component: OtherComponent },
        { path: "others", component: OthersComponent },
        { path: "view-builds/:id", component: ViewBuildsComponent }
      ]
    ),
    HttpClientModule
  ],
  providers: [
    ProductsService,
    PricesService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
