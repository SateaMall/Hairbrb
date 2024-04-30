import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { SearchService } from '../search.service';
import { Search } from '../models/search.model';
import { Router } from '@angular/router';
import { ResultResearchComponent } from "../result-research/result-research.component";
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
    selector: 'app-form-research',
    standalone: true,
    templateUrl: './form-research.component.html',
    styleUrl: './form-research.component.css',
    imports: [FormsModule, ResultResearchComponent, NgIf,RouterOutlet]
})
export class FormResearchComponent {
  formData: Search ;
  data: string[] = [];
  today: any;
  startDate: any;
  endDate: any;
  constructor(private _search: SearchService, private router: Router){
    const currentDate = new Date();
    this.today = currentDate.toISOString().split('T')[0]; // Format as "YYYY-MM-DD"
    this.formData = {
      startDate: '',
      endDate: '',
      minBedrooms: 1,
      minBeds: 1,
      maxPrice: 100,
      maxDistance: 500,
      state: 'Paris',
      country: 'France'
    };
  }
  onSubmit() {
    this._search.setSearch(this.formData);
    console.warn(this.formData);
    this.router.navigate(['/result']);
  }
}
