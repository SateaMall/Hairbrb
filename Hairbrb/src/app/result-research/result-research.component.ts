import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-result-research',
  standalone: true,
  imports: [NgFor],
  templateUrl: './result-research.component.html',
  styleUrl: './result-research.component.css'
})
export class ResultResearchComponent implements OnInit{
  data: String[] =[];
  constructor(public _search: SearchService){
  }

  ngOnInit(): void {
    this.data=this._search.getBiens();
    console.warn(this.data);
  }



}
