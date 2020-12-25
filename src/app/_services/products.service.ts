import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, filter, map, retry } from 'rxjs/operators';
import { CPU } from '../data models/CPU';
import { Motherboard } from '../data models/Motherboard';
import { Memory } from '../data models/Memory';
import { Storage } from '../data models/Storage';
import { GPU } from '../data models/GPU';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  cpusUrl = "assets/cpu.json";
  motherboardsUrl = "assets/motherboard.json";
  memoriesUrl = "assets/memory.json"
  storagesUrl = "assets/storage.json"
  gpusUrl = "assets/gpu.json"

  constructor(
    private http: HttpClient
  ) { }

  getCPUs() {
    return this.http.get<CPU[]>(this.cpusUrl);
  }

  getCPU(id: number): Observable<CPU> {
    return this.getCPUs().pipe(
      map((cpus: CPU[]) => {
        for(let cpu of cpus) {
          if(cpu.id === id)
            return cpu;
        }
        throw throwError(new Error("Invalid ID"));
      })
    );
  }

  getMotherboards() {
    return this.http.get<Motherboard[]>(this.motherboardsUrl);
  }

  getMotherboard(id: number) {
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

  getMemory(id: number) {
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

  getStorage(id: number) {
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

  getGPU(id: number) {
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
}
