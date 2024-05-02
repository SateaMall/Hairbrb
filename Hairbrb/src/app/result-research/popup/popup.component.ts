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
  today: Date = new Date();
  formReservation_popup: boolean;
  startDate: Date | null = null;  // Assurez-vous que c'est un objet Date ou null
  endDate: Date | null = null; 
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
    if (this.selectedOffer?.property?.propertyId && this.startDate && this.endDate) {
      const result = this._reservaiton.reserve(
        this.selectedOffer.property.propertyId,
        this.renterEmail,
        this.formatDate(this.startDate),
        this.formatDate(this.endDate),
        this.review
      );
      result.subscribe({
        next: (booking)=> {
          console.log(booking)
        },
        error: (error) => {
          console.error('Failed to load offers:', error.message);
        }
        }
      );
      console.log(
        this.selectedOffer.property.propertyId,
        this.renterEmail,
        this.formatDate(this.startDate),
        this.formatDate(this.endDate),
        this.review,
        this.stars
      );
      console.log(result);
      // this.showModal = false; // Uncomment this line if you wish to hide a modal after submitting
    }
  }
  


    dateFilter = (d: Date | null): boolean => {
      const date = d || new Date();
      return !this.bookedPeriods.some(period => {
        const startDate = new Date(period.startDate);
        const endDate = new Date(period.endDate);
        return date >= startDate && date <= endDate;
      });
    };

     formatDate(date: Date): string {
      const year = date.getFullYear();
      const mois = date.getMonth() + 1;
      const jour = date.getDate();
    
      const monthFormatted = mois < 10 ? `0${mois}` : mois.toString();
      const dayFormatted = jour < 10 ? `0${jour}` : jour.toString();
    
      return `${year}${monthFormatted}${dayFormatted}`;
    }

}
