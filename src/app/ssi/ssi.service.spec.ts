import { TestBed } from '@angular/core/testing';

import { SsiService } from './ssi.service';

describe('SsiService', () => {
  let service: SsiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
