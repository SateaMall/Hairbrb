import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { NgFor,NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { ResultUnityComponent } from "./result-unity/result-unity.component";
import { Offer } from '../models/offer.model';
import { FormsModule } from '@angular/forms';
import { Property } from '../models/property.model';
import { ReservationService } from '../reservation.service';

@Component({
    selector: 'app-result-research',
    standalone: true,
    templateUrl: './result-research.component.html',
    styleUrl: './result-research.component.css',
    imports: [FormsModule, NgIf,NgFor, ResultUnityComponent, ResultUnityComponent]
})
export class ResultResearchComponent implements OnInit{

  startDate: any;
  endDate: any;

  showModal = false;
  selectedOffer?: Offer;
  public offers: Offer[] = [];

  constructor(public _search: SearchService,public _reserve: ReservationService,private router: Router){
  }
  onSubmit(formData: any): void {
    console.log('Reservation data:', formData);
    //this._reserve.reserve(this.selectedOffer.propertyId.propertyId)
    this.showModal = false;
  }

  toggleModal(open: boolean, offer?: Offer): void {
    this.showModal = open;
    this.selectedOffer = offer;
  }



  ngOnInit(): void {
    const offres=this._search.getOffers().subscribe({
      next: (offers) => {
        this.offers = offers;
      },
      error: (error) => {
        console.error('Failed to load offers:', error.message);
      }
    });
  }
  
}
