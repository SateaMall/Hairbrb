import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

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
    minBedrooms: null,
    minBeds: null,
    maxPrice: null,
    maxDistance: null,
    state: '',
    country: ''
  };

  onSubmit() {
    console.warn(this.formData);
  }
    //TODO Maxdistance is not being retreived correctly and start services 

}
