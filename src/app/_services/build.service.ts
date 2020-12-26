import { Injectable } from '@angular/core';
import { Build } from '../data models/Build';
import { Case } from '../data models/Case';
import { CPU } from '../data models/CPU';
import { GPU } from '../data models/GPU';
import { Memory } from '../data models/Memory';
import { Motherboard } from '../data models/Motherboard';
import { PSU } from '../data models/PSU';
import { Storage } from '../data models/Storage';

@Injectable({
  providedIn: 'root'
})
export class BuildService {
  build: Build;

  constructor() { }

  getBuild() {
    console.log(this.build);

    return this.build;
  }

  //CPU
  setCPU(cpu: CPU) {
    this.build.cpu = cpu;
  }

  //Motherboard
  setMotherboard(motherboard: Motherboard) {
    this.build.motherboard = motherboard;
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

  //Case
  setCase(_case: Case) {
    this.build._case = _case;
  }

  //PSU
  setPSU(psu: PSU) {
    this.build.psu = psu;
  }
}
