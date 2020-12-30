import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class AfStorageService {

  constructor(private storage: AngularFireStorage) { }

  getImgURL(url: string){
    const ref = this.storage.ref(url);
    return ref.getDownloadURL();
  }
}
