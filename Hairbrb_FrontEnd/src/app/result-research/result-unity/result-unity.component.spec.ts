import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultUnityComponent } from './result-unity.component';

describe('ResultUnityComponent', () => {
  let component: ResultUnityComponent;
  let fixture: ComponentFixture<ResultUnityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultUnityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultUnityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
