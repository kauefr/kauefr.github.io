import { TestBed } from '@angular/core/testing';

import { ComparadorLcaCdbService } from './comparador-lca-cdb.service';

describe('ComparadorLcaCdbService', () => {
  let service: ComparadorLcaCdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComparadorLcaCdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
