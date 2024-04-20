import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { SearchService } from '../search.service';

@Component({
  selector: 'app-form-research',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-research.component.html',
  styleUrl: './form-research.component.css'
})
export class FormResearchComponent {
  formData = {
    startDate: '',
    endDate: '',
    minBedrooms: 0,
    minBeds: 0,
    maxPrice: 0,
    maxDistance: 500,
    state: '',
    country: 'France'
  };
  data: string[] = [];
  constructor(private _search: SearchService){

  }
  onSubmit() {
    this.data = this._search.setSearch(this.formData.startDate, this.formData.endDate, this.formData.minBedrooms, this.formData.minBeds,this.formData.maxPrice, this.formData.maxDistance, this.formData.state, this.formData.country);
  
    console.warn(this.formData);
    console.warn(this.data);
  }
    //TODO creat classes for utilisateurs, biens, and locations start services 

}
