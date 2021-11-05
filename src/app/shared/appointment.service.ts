import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Appointment } from '../shared/Appointment';
import { appInitialize } from '@ionic/angular/app-initialize';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  //create
  constructor(private db: AngularFireDatabase) {
    return this.bookingListRef.push({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile
    });
   }

   //Get Single
   getBooking(id: string){
     this.bookingRef = this.db.object('/appointment/' + id);
     return this.bookingRef;
   }

   //Get List
   getBookingList(){
     this.bookingListRef = this.db.list('/appointment');
     return this.bookingListRef;
   }

   //update
   updateBooking(id, apt: Appointment){
     return this.bookingRef.update({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile
     });
   }

   //delete
   deleteBooking(id: string){
     this.bookingRef = this.db.obkect('/appointment/' + id);
     this.bookingRef.remove();
   }
}
