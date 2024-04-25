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
  submitted : boolean = false;
  data: string[] = [];
  constructor(private _search: SearchService, private router: Router){
    this.formData = {
      startDate: '',
      endDate: '',
      minBedrooms: 1,
      minBeds: 2,
      maxPrice: 100,
      maxDistance: 500,
      state: 'Paris',
      country: 'France'
    };
  }
  onSubmit() {
    this._search.setSearch(this.formData);
    console.warn(this.formData);
    this.submitted=false;
    this.submitted=true;
    //this.router.navigateByUrl('/result'); 
    this.router.navigate(['/result']);
  }
    //TODO creat classes for utilisateurs, biens, and locations start services 
}
