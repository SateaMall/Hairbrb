import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResearchComponent } from './form-research.component';

describe('FormResearchComponent', () => {
  let component: FormResearchComponent;
  let fixture: ComponentFixture<FormResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormResearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
