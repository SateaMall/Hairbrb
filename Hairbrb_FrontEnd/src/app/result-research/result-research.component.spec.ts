import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultResearchComponent } from './result-research.component';

describe('ResultResearchComponent', () => {
  let component: ResultResearchComponent;
  let fixture: ComponentFixture<ResultResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultResearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
