import { Component, OnInit } from '@angular/core';
import { UserBuild } from '../data models/UserBuild';
import { BuildService } from '../_services/build.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-my-builds',
  templateUrl: './my-builds.component.html',
  styleUrls: ['./my-builds.component.css']
})
export class MyBuildsComponent implements OnInit {

  builds$;
  constructor(
    public buildService: BuildService,
    private firestore: AngularFirestore
  ) { 
    this.builds$ = this.buildService.getUserBuilds();
  }

  ngOnInit() {
   
  }

  removeBuild(id: string) {
    const path = 'builds/' + id;

    this.firestore.doc<UserBuild>(path).delete();
  }

}
