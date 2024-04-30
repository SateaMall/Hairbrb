import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { NgFor,NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { ResultUnityComponent } from "./result-unity/result-unity.component";
import { Offer } from '../models/offer.model';
import { FormsModule } from '@angular/forms';

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

  data: any;
  public offers: Offer[] = [];
  constructor(public _search: SearchService,private router: Router){
    this.offers.push(new Offer( "id1", "hamburg , 2222","15-05-1999","20-05-1999",  250, 3));
  }

  ngOnInit(): void {
    this.data=this._search.findAllOffers();
    console.warn(this.data);
  }

}
