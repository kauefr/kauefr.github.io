import { TestBed } from '@angular/core/testing';

import { ThemeChooserService } from './theme-chooser.service';

describe('ThemeChooserService', () => {
  let service: ThemeChooserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeChooserService],
    });
    service = TestBed.inject(ThemeChooserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
