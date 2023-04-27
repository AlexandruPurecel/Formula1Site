import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Drivers, Team } from '../Models/team';
import {addDoc, collection, collectionData, Firestore} 
                        from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private fs: Firestore) { }

  getTeams():Observable<Team[]>{
    console.log(this.fs);
    const myCollection: any = collection(this.fs, 'team');
    return collectionData(myCollection);
  }

  addTeam(team:Team){
    const myCollection = collection(this.fs, 'team')
    addDoc(myCollection, team);
  }

  getDrivers():Observable<Drivers[]>{
    console.log(this.fs);
    const myCollection: any = collection(this.fs,'driver')
    return collectionData(myCollection);
  }

  addDrivers(driver:Drivers){
    const myCollection = collection(this.fs, 'driver')
    addDoc(myCollection, driver);
  }


}