import { TestBed } from '@angular/core/testing';

import { EmpserveService } from './empserve.service';

describe('EmpserveService', () => {
  let service: EmpserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
