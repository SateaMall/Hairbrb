import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResultResearchComponent } from './result-research/result-research.component';
import { FormResearchComponent } from './form-research/form-research.component';
import { Router,RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule,RouterOutlet, HeaderComponent, FooterComponent, ResultResearchComponent, FormResearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private router: Router){
  }

  ngOnInit(): void {
    this.router.navigate(['/form']);
  } 
  title = 'Hairbrb';
}
