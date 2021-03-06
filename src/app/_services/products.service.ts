import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, filter, map, retry } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

import { CPU } from '../data models/CPU';
import { Motherboard } from '../data models/Motherboard';
import { Memory } from '../data models/Memory';
import { Storage } from '../data models/Storage';
import { GPU } from '../data models/GPU';
import { Case } from '../data models/Case';
import { PSU } from '../data models/PSU';
import { CpuComponent } from '../_product-components/cpu/cpu.component';
import { CpuCooler } from '../data models/CpuCooler';
import { CoolerComponent } from '../_product-components/cooler/cooler.component';
import { Other } from '../data models/Other';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  cpusUrl = "assets/cpu.json";
  motherboardsUrl = "assets/motherboard.json";
  memoriesUrl = "assets/memory.json";
  storagesUrl = "assets/storage.json";
  gpusUrl = "assets/gpu.json";
  casesUrl = "assets/case.json";
  psusUrl = "assets/psu.json";

  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore
  ) { }

    // TODO: rest of things (cpu cooler and others)

  getCPUs() {
    let protArr: CPU[] = [];

    this.firestore.collection<CPU[]>('cpus').snapshotChanges()
      .subscribe(docChanges => {
        for(let docCh of docChanges) {
          let cpu: CPU = docCh.payload.doc.data() as unknown as CPU;
          cpu.id = docCh.payload.doc.id;

          protArr.push(cpu);
        }
      });

    return of(protArr);
  }

  getCPU(id: string): Observable<CPU> {
    const url = 'cpus/' + id;
    
    return this.firestore.doc<CPU>(url).snapshotChanges()
      .pipe(
        map(docChange => {
          let cpu: CPU;

          cpu = docChange.payload.data() as CPU;
          cpu.id = docChange.payload.id;

          return cpu;
        })
      );
  }

  getMotherboards() {
    let protArr: Motherboard[] = [];

    this.firestore.collection<Motherboard[]>('motherboards').snapshotChanges()
      .subscribe(docChanges => {
        for(let docCh of docChanges) {
          let motherboard: Motherboard = docCh.payload.doc.data() as unknown as Motherboard;
          motherboard.id = docCh.payload.doc.id;

          protArr.push(motherboard);
        }
      });

    return of(protArr);
  }

  getMotherboard(id: string) {
    const url = 'motherboards/' + id;
    
    return this.firestore.doc<Motherboard>(url).snapshotChanges()
      .pipe(
        map(docChange => {
          let motherboard: Motherboard;

          motherboard = docChange.payload.data() as Motherboard;
          motherboard.id = docChange.payload.id;

          return motherboard;
        })
      );
  }

  getMemories() {
    let protArr: Memory[] = [];

    this.firestore.collection<Memory[]>('memories').snapshotChanges()
      .subscribe(docChanges => {
        for(let docCh of docChanges) {
          let memory: Memory = docCh.payload.doc.data() as unknown as Memory;
          memory.id = docCh.payload.doc.id;

          protArr.push(memory);
        }
      });

    return of(protArr);
  }

  getMemory(id: string) {
    const url = 'memories/' + id;
    
    return this.firestore.doc<Memory>(url).snapshotChanges()
      .pipe(
        map(docChange => {
          let memory: Memory;

          memory = docChange.payload.data() as Memory;
          memory.id = docChange.payload.id;

          return memory;
        })
      );
  }

  getStorages() {
    let protArr: Storage[] = [];

    this.firestore.collection<Storage[]>('storages').snapshotChanges()
      .subscribe(docChanges => {
        for(let docCh of docChanges) {
          let storage: Storage = docCh.payload.doc.data() as unknown as Storage;
          storage.id = docCh.payload.doc.id;

          protArr.push(storage);
        }
      });

    return of(protArr);
  }

  getStorage(id: string) {
    const url = 'storages/' + id;
    
    return this.firestore.doc<Storage>(url).snapshotChanges()
      .pipe(
        map(docChange => {
          let storage: Storage;

          storage = docChange.payload.data() as Storage;
          storage.id = docChange.payload.id;

          return storage;
        })
      );
  }

  getGPUs() {
    let protArr: GPU[] = [];

    this.firestore.collection<GPU[]>('gpus').snapshotChanges()
      .subscribe(docChanges => {
        for(let docCh of docChanges) {
          let gpu: GPU = docCh.payload.doc.data() as unknown as GPU;
          gpu.id = docCh.payload.doc.id;

          protArr.push(gpu);
        }
      });

    return of(protArr);
  }

  getGPU(id: string) {
    const url = 'gpus/' + id;
    
    return this.firestore.doc<GPU>(url).snapshotChanges()
      .pipe(
        map(docChange => {
          let gpu: GPU;

          gpu = docChange.payload.data() as GPU;
          gpu.id = docChange.payload.id;

          return gpu;
        })
      );
  }

  getCases() {
    let protArr: Case[] = [];

    this.firestore.collection<Case[]>('cases').snapshotChanges()
      .subscribe(docChanges => {
        for(let docCh of docChanges) {
          let _case: Case = docCh.payload.doc.data() as unknown as Case;
          _case.id = docCh.payload.doc.id;

          protArr.push(_case);
        }
      });

    return of(protArr);
  }

  getCase(id: string) {
    const url = 'cases/' + id;
    
    return this.firestore.doc<Case>(url).snapshotChanges()
      .pipe(
        map(docChange => {
          let _case: Case;

          _case = docChange.payload.data() as Case;
          _case.id = docChange.payload.id;

          return _case;
        })
      );
  }

  getPSUs() {
    let protArr: PSU[] = [];

    this.firestore.collection<PSU[]>('psus').snapshotChanges()
      .subscribe(docChanges => {
        for(let docCh of docChanges) {
          let psu: PSU = docCh.payload.doc.data() as unknown as PSU;
          psu.id = docCh.payload.doc.id;

          protArr.push(psu);
        }
      });

    return of(protArr);
  }

  getPSU(id: string) {
    const url = 'psus/' + id;
    
    return this.firestore.doc<PSU>(url).snapshotChanges()
      .pipe(
        map(docChange => {
          let psu: PSU;

          psu = docChange.payload.data() as PSU;
          psu.id = docChange.payload.id;

          return psu;
        })
      );
  }

  getCoolers() {
    let protArr: CpuCooler[] = [];

    this.firestore.collection<CpuCooler[]>('coolers').snapshotChanges()
      .subscribe(docChanges => {
        for(let docCh of docChanges) {
          let cooler: CpuCooler = docCh.payload.doc.data() as unknown as CpuCooler;
          cooler.id = docCh.payload.doc.id;

          protArr.push(cooler);
        }
      });

    return of(protArr);
  }

  getCooler(id: string) {
    const url = 'coolers/' + id;
    
    return this.firestore.doc<CpuCooler>(url).snapshotChanges()
      .pipe(
        map(docChange => {
          let cooler: CpuCooler;

          cooler = docChange.payload.data() as CpuCooler;
          cooler.id = docChange.payload.id;

          return cooler;
        })
      );
  }

  getOthers() {
    let protArr: Other[] = [];

    this.firestore.collection<Other[]>('others').snapshotChanges()
      .subscribe(docChanges => {
        for(let docCh of docChanges) {
          let other: Other = docCh.payload.doc.data() as unknown as Other;
          other.id = docCh.payload.doc.id;

          protArr.push(other);
        }
      });

    return of(protArr);
  }

  getOther(id: string) {
    const url = 'others/' + id;
    
    return this.firestore.doc<Other>(url).snapshotChanges()
      .pipe(
        map(docChange => {
          let other: Other;

          other = docChange.payload.data() as Other;
          other.id = docChange.payload.id;

          return other;
        })
      );
  }
}
