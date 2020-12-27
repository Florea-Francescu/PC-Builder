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

  // THIS IS DONE
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

  //THIS IS NEXT
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
    return this.http.get<Motherboard[]>(this.motherboardsUrl);
  }

  getMotherboard(id: string) {
    return this.getMotherboards().pipe(
      map((motherboards: Motherboard[]) => {
        for(let motherboard of motherboards) {
          if(motherboard.id === id)
            return motherboard;
        }
        throw throwError(new Error("Invalid ID"));
      })
    );
  }

  getMemories() {
    return this.http.get<Memory[]>(this.memoriesUrl);
  }

  getMemory(id: string) {
    return this.getMemories().pipe(
      map((memories: Memory[]) => {
        for(let memory of memories) {
          if(memory.id === id)
            return memory;
        }
        throw throwError(new Error("Invalid ID"));
      })
    );
  }

  getStorages() {
    return this.http.get<Storage[]>(this.storagesUrl);
  }

  getStorage(id: string) {
    return this.getStorages().pipe(
      map((storages: Storage[]) => {
        for(let storage of storages) {
          if(storage.id === id)
            return storage;
        }
        throw throwError(new Error("Invalid ID"));
      })
    );
  }

  getGPUs() {
    return this.http.get<GPU[]>(this.gpusUrl);
  }

  getGPU(id: string) {
    return this.getGPUs().pipe(
      map((gpus: GPU[]) => {
        for(let gpu of gpus) {
          if(gpu.id === id)
            return gpu;
        }
        throw throwError(new Error("Invalid ID"));
      })
    );
  }

  getCases() {
    return this.http.get<Case[]>(this.casesUrl);
  }

  getCase(id: string) {
    return this.getCases().pipe(
      map((cases: Case[]) => {
        for(let cs of cases) {
          if(cs.id === id)
            return cs;
        }
        throw throwError(new Error("Invalid ID"));
      })
    );
  }

  getPSUs() {
    return this.http.get<PSU[]>(this.psusUrl);
  }

  getPSU(id: string) {
    return this.getPSUs().pipe(
      map((psus: PSU[]) => {
        for(let psu of psus) {
          if(psu.id === id)
            return psu;
        }
        throw throwError(new Error("Invalid ID"));
      })
    );
  }
}
