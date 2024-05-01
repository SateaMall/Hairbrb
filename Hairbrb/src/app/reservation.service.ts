import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Booking } from './models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'http://localhost:3000';

  constructor(private _http:HttpClient) {}

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
