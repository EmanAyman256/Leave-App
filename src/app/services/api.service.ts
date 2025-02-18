import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  // constructor(private http: HttpClient) {}
  constructor(private firestore: AngularFirestore) {}

  addData(data: any) {
    return this.firestore.collection("activity-Request").add(data);
  }

  addDataWithCustomId(collectionName: string, customId: string, data: any) {
    return this.firestore.collection(collectionName).doc(customId).set(data);
  }
  AddNewRequest() {}
  getUsers() {}
  getApprovers() {}
}
