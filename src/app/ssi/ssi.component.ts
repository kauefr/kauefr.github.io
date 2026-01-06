import { Component, inject } from '@angular/core';
import { SsiService } from './ssi.service';

@Component({
  selector: 'app-ssi',
  imports: [],
  templateUrl: './ssi.component.html',
})
export class SsiComponent {
  s = inject(SsiService);
}
