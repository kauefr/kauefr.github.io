import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, startWith } from 'rxjs';
import { FishData } from './sv-fishing.model';

@Injectable({ providedIn: 'root' })
export class SvFishingService {
  http = inject(HttpClient);
  data: Observable<FishData>;

  constructor() {
    this.data = this.http.get<FishData>('/sv-fishing-by-season.json').pipe(
      startWith({
        fish: {},
        locations: {},
        availability: [],
      }),
    );
  }
}
