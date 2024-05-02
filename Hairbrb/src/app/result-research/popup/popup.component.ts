import { Component, Input, OnInit } from '@angular/core';
import { Offer } from '../../models/offer.model';
import { NgFor,NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservationService } from '../../reservation.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [NgIf,NgFor,FormsModule, MatDatepickerModule, MatInputModule, MatNativeDateModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnInit{

  @Input()
  selectedOffer?: Offer;

  formReservation_popup: boolean;
  startDate: any;
  endDate: any;
  renterEmail: any;
  bookedPeriods: any[] = [];
  review: any;
  stars: any;
    


  constructor(public _reservaiton:ReservationService){
    this.formReservation_popup=false;
  }
 

  ngOnInit(): void {
    if (this.selectedOffer?.property?.propertyId) {
      this._reservaiton.getBookedPeriods(this.selectedOffer.property.propertyId).subscribe({
        next: (periods) => {
          this.bookedPeriods = periods;
        },
        error: (error) => {
          console.error('Error fetching booked periods:', error);
        }
      });
    }
  }

  activateForm() {
    this.formReservation_popup=true;
  }

  onSubmit(formData: any): void {
    console.log('Reservation data:', formData);
    if (this.selectedOffer?.property?.propertyId) {
      console.log(this._reservaiton.reserve(this.selectedOffer.property.propertyId,this.renterEmail,this.startDate,this.endDate,this.review,this.stars));
    }
    //this.showModal = false;
  }


  
    dateFilter = (d: Date | null): boolean => {
      const date = d || new Date();
      return !this.bookedPeriods.some(period => {
        const startDate = new Date(period.startDate);
        const endDate = new Date(period.endDate);
        return date >= startDate && date <= endDate;
      });
    };

}
