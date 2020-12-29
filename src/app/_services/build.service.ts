import { Injectable } from '@angular/core';
import { Build } from '../data models/Build';
import { Case } from '../data models/Case';
import { CPU } from '../data models/CPU';
import { GPU } from '../data models/GPU';
import { Memory } from '../data models/Memory';
import { Motherboard } from '../data models/Motherboard';
import { PSU } from '../data models/PSU';
import { Storage } from '../data models/Storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserBuild } from '../data models/UserBuild';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { PricesService } from './prices.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BuildService { /////TODO: add incomapatibility checks for the build!
  build: Build;


  constructor(private firestore: AngularFirestore, private af: AngularFireAuth, private pricesService: PricesService) {
    this.build = {
      "cpu": null,
      "motherboard": null,
      "memory": [],
      "storage": [],
      "gpu": null,
      "_case": null,
      "psu": null
    }
  }

  getBuild() {
    return this.build;
  }

  addProduct(product: any, type: string) {
    console.log(type);
    switch (type) {
      case "CPU": this.setCPU(product); break;
      case "Motherboard": this.setMotherboard(product); break;
      case "Memory": this.addMemory(product); break;
      case "Storage": this.addStorage(product); break;
      case "GPU": this.setGPU(product); break;
      case "Case": this.setCase(product); break;
      case "PSU": this.setPSU(product); break;
      default: throw new Error("Unknown Product!");
    }
  }

  //CPU
  setCPU(cpu: CPU) {
    this.build.cpu = cpu;
  }

  removeCPU() {
    this.build.cpu = null;
  }

  //Motherboard
  setMotherboard(motherboard: Motherboard) {
    this.build.motherboard = motherboard;
  }

  removeMotherboard() {
    this.build.motherboard = null;
  }

  //Memory
  addMemory(memory: Memory) {
    this.build.memory.push(memory);
  }

  removeMemory(memory: Memory) {
    let index = this.build.memory.findIndex(mem => mem.id === memory.id);

    this.build.memory.splice(index, 1);
  }

  clearMemory() {
    this.build.memory = [];
  }

  //Storage
  addStorage(storage: Storage) {
    this.build.storage.push(storage);
  }

  removeStorage(storage: Storage) {
    let index = this.build.storage.findIndex(stor => stor.id === storage.id);

    this.build.storage.splice(index, 1);
  }

  clearStorage() {
    this.build.storage = [];
  }

  //GPU
  setGPU(gpu: GPU) {
    this.build.gpu = gpu;
  }

  removeGPU() {
    this.build.gpu = null;
  }

  //Case
  setCase(_case: Case) {
    this.build._case = _case;
  }

  removeCase() {
    this.build._case = null;
  }

  //PSU
  setPSU(psu: PSU) {
    this.build.psu = psu;
  }

  removePSU() {
    this.build.psu = null;
  }
  saveBuild(build: Build){
  
   this.af.user.subscribe(user => {
    return this.firestore.collection<UserBuild>('builds').add({
       uid: user.uid,
       build: this.build,
       date: this.getDate(),
       buildid: "Build " + Math.floor(Math.random() * 11),
       total:  this.totalPrice()
     });
   });
  }
  private getDate() {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    return year + "/" + month + "/" + day;
  }

  private totalPrice(): number {
    var sum: number;
    sum = 0;
    if(this.build.cpu != null)
      sum += this.pricesService.getLowest(this.build.cpu.prices).price;
    else
      sum += 0;

    if(this.build.motherboard != null)
      sum += this.pricesService.getLowest(this.build.motherboard.prices).price;
    else
      sum += 0;

    if(this.build.psu != null)
      sum += this.pricesService.getLowest(this.build.psu.prices).price;
    else
      sum += 0;

    if(this.build._case != null)
      sum += this.pricesService.getLowest(this.build._case.prices).price;
    else
      sum += 0;
      
    if(this.build.gpu != null)
      sum += this.pricesService.getLowest(this.build.gpu.prices).price;
    else
      sum += 0; 

    if(this.build.memory != [])
      {
        for(let memory of this.build.memory)
        sum += this.pricesService.getLowest(memory.prices).price;
      }
    else
      sum += 0;
    
    if(this.build.storage != [])
      {
        for(let storage of this.build.storage)
        sum += this.pricesService.getLowest(storage.prices).price;
      }
    else
      sum += 0;

      return sum;
  }

  getUserBuilds(){
    //  return this.firestore.collection('/builds', ref => ref.where('uid', '==', firebase.default.auth().currentUser.uid
    
    //  )).valueChanges(); 
    //let uid = firebase.default.auth().currentUser.uid;
    return this.firestore.collection<UserBuild>('/builds', ref => ref.where('uid', '==', firebase.default.auth().currentUser.uid
    
    )).snapshotChanges().pipe(
      map(documentChanges => {
        let builds: UserBuild[] = [];
        for(let change of documentChanges)
        {
          let build: UserBuild;
          build = change.payload.doc.data() as UserBuild;
          build.buildid = change.payload.doc.id;
          builds.push(build);
        }
        return builds;
      })
    ); 
  }

  

  getMyBuild(id: string): Observable<UserBuild> {
    const url = 'builds/' + id;
    
    return this.firestore.doc<UserBuild>(url).snapshotChanges()
      .pipe(
        map(docChange => {
          let myBuild: UserBuild;

          myBuild = docChange.payload.data() as UserBuild;
          myBuild.buildid = docChange.payload.id;

          return myBuild;
        })
      );
  }
  


}
