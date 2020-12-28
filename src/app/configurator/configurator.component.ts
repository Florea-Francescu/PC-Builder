import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { BuildService } from '../_services/build.service';
import { PricesService } from '../_services/prices.service';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {

  constructor(
    public buildService: BuildService,
    public pricesService: PricesService,
    public authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    
  }

}
