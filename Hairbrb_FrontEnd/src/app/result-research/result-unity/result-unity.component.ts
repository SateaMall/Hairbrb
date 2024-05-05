import { NgIf,NgFor } from '@angular/common';
import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Offer } from '../../models/offer.model';

@Component({
  selector: 'app-result-unity',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './result-unity.component.html',
  styleUrl: './result-unity.component.css'
})
export class ResultUnityComponent {
  @Input()
  offer!: Offer;

  @Output()
  openModal= new EventEmitter<void>;
  
}
