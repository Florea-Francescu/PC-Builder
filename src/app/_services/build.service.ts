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
import { IncompatibilityError } from '../data models/errors/IncompatibilityError';
import { IncompleteBuildError } from '../data models/errors/IncompleteBuildError';

@Injectable({
  providedIn: 'root'
})
export class BuildService { /////TODO: add incompatibility checks for the build!
  build: Build;
  buildErrors: BuildError[] = [];

  constructor() {
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
}
