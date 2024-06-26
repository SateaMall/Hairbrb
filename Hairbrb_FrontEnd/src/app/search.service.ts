import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Offer } from './models/offer.model';
import { HttpClient } from '@angular/common/http';
import { Search } from './models/search.model';
import { Property } from './models/property.model';
import { Booking } from './models/booking.model';
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
  getOffers(): Observable<Offer[]> {
    console.log(this.formData);
    return this.searchOffers(this.formData);  // Pass the current form data
  }

  searchOffers(params: Search): Observable<Offer[]> {
    const queryParams = new URLSearchParams();
    
    if (params.startDate) queryParams.set('startDate', params.startDate);
    if (params.endDate) queryParams.set('endDate', params.endDate);
    if (params.city) queryParams.set('city', params.city);
    if (params.maxPrice) queryParams.set('maxPrice', params.maxPrice.toString());
    if (params.minBedrooms) queryParams.set('minBedrooms', params.minBedrooms.toString());
    if (params.minBeds) queryParams.set('minBeds', params.minBeds.toString());
    if (params.maxDistance) queryParams.set('maxDistance', params.maxDistance.toString());
    if (params.minRating) queryParams.set('minRating', params.minRating.toString());
    
    return this._http.get<any[]>(`${this.baseUrl}/offers/search?${queryParams.toString()}`)
    .pipe(
      map(offersArray => {
        return offersArray.map(offer => {
          const property = new Property(
            offer.propertyId._id, // Assuming this is how you identify properties uniquely
            offer.propertyId.ownerId, // ownerEmail not provided in JSON
            offer.propertyId.city,
            offer.propertyId.street,
            offer.propertyId.postalCode,
            offer.propertyId.beds,
            offer.propertyId.bedrooms,
            offer.propertyId.distance,//en km
            offer.propertyId.price,
            offer.propertyId.rating,
            offer.propertyId.imageUrl
          );

          return new Offer(
            offer.offerId,
            property,
            this.parseDate(offer.startDate),
            this.parseDate(offer.endDate)
          );
        });
      }),
      catchError(error => {
        console.error('Error fetching offers', error);
        return throwError(() => new Error('Error fetching offers'));
      })
    );
  }

  parseDate(dateNumber : string) : Date {
    const dateString = dateNumber.toString();
    const year = parseInt(dateString.substring(0, 4), 10);
    const month = parseInt(dateString.substring(4, 6), 10) - 1; // Les mois en JS sont indexés à partir de 0
    const day = parseInt(dateString.substring(6, 8), 10);
    return new Date(year, month, day);
  }
}
