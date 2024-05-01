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
            offer.propertyId.distance,
            offer.propertyId.price,
            offer.propertyId.rating,
            offer.propertyId.imageUrl
          );

          return new Offer(
            offer.offerId,
            property,
            new Date(offer.startDate * 1000).toISOString(),
            new Date(offer.endDate * 1000).toISOString() //TODO modify
          );
        });
      }),
      catchError(error => {
        console.error('Error fetching offers', error);
        return throwError(() => new Error('Error fetching offers'));
      })
    );
  }

  reserve(propertyId: string, renterEmail: string, startDate: string, endDate: string): Observable<Booking> {
    const bookingData = {
      propertyId: propertyId,
      renterEmail: renterEmail,
      startDate: startDate,
      endDate: endDate
    };
  
    return this._http.post<any>(`${this.baseUrl}/bookings`, bookingData)
      .pipe(
        map(response => {
          // Assuming the response structure directly matches what Booking needs
          return new Booking(
            response._id,       // Booking ID from response, if it's returned; otherwise adjust as needed
            response.propertyId,
            response.renterEmail,
            parseInt(response.startDate), // Assuming dates are sent as numbers; adjust parsing as needed
            parseInt(response.endDate),
            response.review     // Assuming there might be a review field; handle according to actual API
          );
        }),
        catchError(error => {
          console.error('Error creating booking', error);
          return throwError(() => new Error('Error creating booking'));
        })
      );
  }
}
