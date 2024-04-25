import { NgIf } from '@angular/common';
import { Component,Input } from '@angular/core';
import { Offer } from '../../models/offer.model';

@Component({
  selector: 'app-result-unity',
  standalone: true,
  imports: [NgIf],
  templateUrl: './result-unity.component.html',
  styleUrl: './result-unity.component.css'
})
export class ResultUnityComponent {
  @Input()
  offer!: Offer;
  
  listing = {
    location: 'Cassis, France',
    availability: '13–20 jul.',
    price: 1023,
    currency: '€',
    rating: 5
  };
}
