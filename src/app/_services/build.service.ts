import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Build } from '../data models/Build';
import { BuildError } from '../data models/errors/BuildError';
import { Case } from '../data models/Case';
import { CPU } from '../data models/CPU';
import { CpuCooler } from '../data models/CpuCooler';
import { GPU } from '../data models/GPU';
import { Memory } from '../data models/Memory';
import { Motherboard } from '../data models/Motherboard';
import { Other } from '../data models/Other';
import { PSU } from '../data models/PSU';
import { Storage } from '../data models/Storage';

import { AngularFirestore } from '@angular/fire/firestore';
import { UserBuild } from '../data models/UserBuild';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { PricesService } from './prices.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IncompatibilityError } from '../data models/errors/IncompatibilityError';
import { IncompleteBuildError } from '../data models/errors/IncompleteBuildError';


@Injectable({
  providedIn: 'root'
})
export class BuildService { /////TODO: add incompatibility checks for the build!
  build: Build;
  buildErrors: BuildError[] = [];


  constructor(private firestore: AngularFirestore, private af: AngularFireAuth, private pricesService: PricesService) {
    this.build = {
      "cpu": null,
      "motherboard": null,
      "memory": [],
      "storage": [],
      "gpu": null,
      "_case": null,
      "psu": null,
      "cooler": null,
      "others": []
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
      case "CPU Cooler": this.setCooler(product); break;
      case "Other": this.addOther(product); break;
      default: throw new Error("Unknown Product!");
    }
  }

  clearBuild() {
    this.build = {
      "cpu": null,
      "motherboard": null,
      "memory": [],
      "storage": [],
      "gpu": null,
      "_case": null,
      "psu": null,
      "cooler": null,
      "others": []
    }
  }

  getErrors() {
    this.buildErrors = [];
    this.computeErrors();

    return this.buildErrors;
  }

  private computeErrors() {
    let incompleteBuild: IncompleteBuildError = this.getIncompleteBuildError();
    if(incompleteBuild != null)
      this.buildErrors.push(incompleteBuild);

    let incompatibilityErrors: IncompatibilityError[] = this.getIncompatibilityErrors();
    if(incompatibilityErrors.length > 0) 
      for(let error of incompatibilityErrors) 
        this.buildErrors.push(error);
   }

  private getIncompatibilityErrors(): IncompatibilityError[] {
    let incompatibilityErrors: IncompatibilityError[] = [];

    // other incompatibility errors added here
    if(this.build.motherboard != null && this.build.cpu != null)
      if(this.build.motherboard.socket != this.build.cpu.socket)
        incompatibilityErrors.push(new IncompatibilityError("CPU", "Motherboard", "different sockets"));
    
    if(this.build.motherboard != null && this.build._case != null)
      if(!this.build._case.motherboards.find(form => form === this.build.motherboard.format)) 
        incompatibilityErrors.push(new IncompatibilityError("Motherboard", "Case", "motherboard format not supported by the case"));

    if(this.build.memory.length > 0)
      if(this.build.memory.find(mem => mem.id != this.build.memory[0].id))
        incompatibilityErrors.push(new IncompatibilityError("Memory", "Memory", "different memories are not compatible"));
    
    return incompatibilityErrors;
  }

  private getIncompleteBuildError(): IncompleteBuildError {
    let missingProducts = this.getMissingProducts();

    if(missingProducts.length > 0) 
      return new IncompleteBuildError(missingProducts);
    return null;
  }

  private getMissingProducts(): string[] {
    let missingProducts: string[] = [];

    if(this.build.cpu == null)
      missingProducts.push("CPU");
    if(this.build.motherboard == null)
      missingProducts.push("Motherboard");
    if(this.build.memory.length == 0) 
      missingProducts.push("Memory");
    if(this.build.storage.length == 0) 
      missingProducts.push("Storage");
    if(this.build.gpu == null) 
      missingProducts.push("GPU");
    if(this.build._case == null)
      missingProducts.push("Case");
    if(this.build.psu == null) 
      missingProducts.push("PSU");

    return missingProducts;
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
  
  //Cooler
  setCooler(cooler: CpuCooler) {
    this.build.cooler = cooler;
  }

  removeCooler() {
    this.build.cooler = null;
  }

  //Others
  addOther(other: Other) {
    this.build.others.push(other);
  }

  removeOther(other: Other) {
    let index = this.build.storage.findIndex(oth => oth.id === other.id);

    this.build.others.splice(index, 1);
  }

  clearOthers() {
    this.build.others = [];
  }

  saveBuild(build: Build){
  
    this.af.user.subscribe(user => {
      let build: Build = {
        "cpu": this.build.cpu,
        "motherboard": this.build.motherboard,
        "memory": this.build.memory,
        "storage": this.build.storage,
        "gpu": this.build.gpu,
        "_case": this.build._case,
        "psu": this.build.psu,
        "cooler": this.build.cooler,
        "others": this.build.others
      }

      let total: number = this.totalPrice();
      this.clearBuild();
     return this.firestore.collection<UserBuild>('builds').add({
        uid: user.uid,
        build: build,
        date: this.getDate(),
        buildid: "Build " + Math.floor(Math.random() * 11),
        total:  total
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
