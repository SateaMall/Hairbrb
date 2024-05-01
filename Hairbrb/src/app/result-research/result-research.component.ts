import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { NgFor,NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { ResultUnityComponent } from "./result-unity/result-unity.component";
import { Offer } from '../models/offer.model';
import { FormsModule } from '@angular/forms';
import { Property } from '../models/property.model';

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

  onSubmit(formData: any): void {
    console.log('Reservation data:', formData);
    //TODO Call a servic to reserve 

    this.showModal = false;
  }

  showModal = false;
  selectedOffer?: Offer;

  toggleModal(open: boolean, offer?: Offer): void {
    this.showModal = open;
    this.selectedOffer = offer;
  }

  public offers: Offer[] = [];
  constructor(public _search: SearchService,private router: Router){
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
