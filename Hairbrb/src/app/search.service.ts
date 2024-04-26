import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Offer } from './models/offer.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Search } from './models/search.model';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl = 'http://localhost:3000';
  private formData!: Search;
  constructor(private _http:HttpClient) {}
  
  setSearch(formData: Search){
    this.formData=formData;
    
  }


  searchOffers(params: {startDate?: string, endDate?: string, city?: string, maxPrice?: number, minBedrooms?: number, minBeds?: number, maxDistance?: number}): Observable<any[]> {
    const queryParams = new URLSearchParams();
    if (params.startDate !== undefined) queryParams.set('startDate', params.startDate.toString());
    if (params.endDate !== undefined) queryParams.set('endDate', params.endDate.toString());
    if (params.city) queryParams.set('city', params.city);
    if (params.maxPrice !== undefined) queryParams.set('maxPrice', params.maxPrice.toString());
    if (params.minBedrooms !== undefined) queryParams.set('minBedrooms', params.minBedrooms.toString());
    if (params.minBeds !== undefined) queryParams.set('minBeds', params.minBeds.toString());
    if (params.maxDistance !== undefined) queryParams.set('maxDistance', params.maxDistance.toString());
    return this._http.get<any[]>(`${this.baseUrl}/offers/search`, { params: queryParams })
      map(offers => offers.map(offer => new Offer(
        offer.offerId,
        offer.propertyId,
        offer.startDate,
        offer.endDate
      )))
    );
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
