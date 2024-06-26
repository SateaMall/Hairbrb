import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { Booking } from './models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'http://localhost:3000';

  constructor(private _http:HttpClient) {}

  reserve(propertyId: string, renterEmail: string, startDate: string, endDate: string, review?: string): Observable<Booking> {
   
    const bookingData = {
      propertyId: propertyId,
      renterEmail: renterEmail,
      startDate: parseInt(startDate),  // Assuming startDate is a string in 'YYYYMMDD' format
      endDate: parseInt(endDate),      // Assuming endDate is a string in 'YYYYMMDD' format
      ...(review && { review: review })
    };
    console.log(bookingData);

    return this._http.post<any>(`${this.baseUrl}/bookings`, bookingData)
      .pipe(
        tap(response => {  
          console.log(response);
          console.log('HTTP Status Code:', response.status); // Log the status code
          // Assuming the response structure directly matches what Booking needs
          return new Booking(
            response._id,       // Booking ID from response
            response.propertyId,
            response.renterEmail,
            response.startDate, // Assuming the API returns these as numbers or whatever format is required
            response.endDate,
            response.review
          );
        }),
        catchError(error => {
          console.error('Error creating booking', error);
          return throwError(() => new Error('Error creating booking'));
        })
      );
  }

  // Service pour interagir avec l'API backend
getBookedPeriods(propertyId?: string): Observable<any> {
  return this._http.get(`http://localhost:3000/bookings/availability?propertyId=${propertyId}`);
}
  parseDate(dateNumber : string) : Date {
    const dateString = dateNumber.toString();
    const year = parseInt(dateString.substring(0, 4), 10);
    const month = parseInt(dateString.substring(4, 6), 10) - 1; // Les mois en JS sont indexés à partir de 0
    const day = parseInt(dateString.substring(6, 8), 10);
    return new Date(year, month, day);
  }
}
