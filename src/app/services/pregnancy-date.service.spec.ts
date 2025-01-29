import { TestBed } from '@angular/core/testing';

import { PregnancyDateService } from './pregnancy-date.service';

describe('PregnancyDateService', () => {
  let service: PregnancyDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PregnancyDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
