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
  imports: [FormsModule, MatDatepickerModule, MatInputModule, MatNativeDateModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent implements OnInit{
  startDate: any;
  endDate: any;
  @Input()
  selectedOffer?: Offer;
  bookedPeriods: any[] = [];


  constructor(public _reservaiton:ReservationService){}
 

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

  onSubmit(formData: any): void {
    console.log('Reservation data:', formData);
    //this._reserve.reserve(this.selectedOffer.propertyId.propertyId)
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
