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
  private data: string[]= ["hi"];
  private form!: Search;
  constructor(private _http:HttpClient) {}
  
  setSearch(formData: Search){
    this.form=formData;
    
  }

  getBiens(){
    return this.findAllOffers()
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
