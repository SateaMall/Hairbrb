import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-research',
  standalone: true,
  imports: [NgFor],
  templateUrl: './result-research.component.html',
  styleUrl: './result-research.component.css'
})
export class ResultResearchComponent implements OnInit{
  data: any;
  constructor(public _search: SearchService,private router: Router){
  }

  ngOnInit(): void {
    this.data=this._search.getBiens();
    console.warn("hi");
    console.warn(this.data);
  }



}
