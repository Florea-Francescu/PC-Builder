import { Component, OnInit } from '@angular/core';
import { UserBuild } from '../data models/UserBuild';
import { BuildService } from '../_services/build.service';

@Component({
  selector: 'app-my-builds',
  templateUrl: './my-builds.component.html',
  styleUrls: ['./my-builds.component.css']
})
export class MyBuildsComponent implements OnInit {

  builds$;
  constructor(public buildService: BuildService) { 
    this.builds$ = this.buildService.getUserBuilds();
  }

  ngOnInit() {
   
  }

}
