import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, filter, map, retry } from 'rxjs/operators';
import { CPU } from '../data models/CPU';
import { Motherboard } from '../data models/Motherboard';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  cpusUrl = "assets/cpu.json";
  motherboardsUrl = "assets/motherboard.json";

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
}
