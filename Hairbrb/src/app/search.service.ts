import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Offer } from './models/offer.model';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl = 'http://localhost:3000';
  private data: string[]= ["hi"];

  constructor(private _http:HttpClient) {}
  
  setSearch(startDate :string, endDate :string, minBedrooms:number, minBeds: number,maxPrice: number, maxDistance:number, state:string, coutnry:string): string[]{
    this.data=[endDate];
    return this.data;
  }
  getBiens(){
    return this.data;
  }

  
  findAllOffers(): Observable<Offer[]> {
    return this._http.get<Offer[]>(`${this.baseUrl}/offers`).pipe(
      map(offers => offers.map(offer => new Offer(
        offer.offerId,
        offer.propertyId,
        offer.startDate,
        offer.endDate
      )))
    );
  }

}
