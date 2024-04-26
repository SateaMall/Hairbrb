import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { ResultUnityComponent } from "./result-unity/result-unity.component";
import { Offer } from '../models/offer.model';

@Component({
    selector: 'app-result-research',
    standalone: true,
    templateUrl: './result-research.component.html',
    styleUrl: './result-research.component.css',
    imports: [NgFor, ResultUnityComponent, ResultUnityComponent]
})
export class ResultResearchComponent implements OnInit{
  data: any;
  offers!: Offer[];
  constructor(public _search: SearchService,private router: Router){
  }

  ngOnInit(): void {
    this.data=this._search.getBiens();
    console.warn(this.data);
  }



}
