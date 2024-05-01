import { Component, Input } from '@angular/core';
import { Offer } from '../../models/offer.model';
import { NgFor,NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservationService } from '../../reservation.service';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  startDate: any;
  endDate: any;
  @Input()
  selectedOffer?: Offer;

  constructor(public _reservaiton:ReservationService){}
  onSubmit(formData: any): void {
    console.log('Reservation data:', formData);
    //this._reserve.reserve(this.selectedOffer.propertyId.propertyId)
    //this.showModal = false;
  }


}
