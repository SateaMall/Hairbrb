import { TestBed } from '@angular/core/testing';

import { RetreiveDataService } from './retreive-data.service';

describe('RetreiveDataService', () => {
  let service: RetreiveDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetreiveDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
