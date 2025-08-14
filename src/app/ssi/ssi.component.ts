import { Component, inject } from '@angular/core';
import { SsiService } from './ssi.service';

@Component({
  selector: 'app-ssi',
  imports: [],
  templateUrl: './ssi.component.html',
  styleUrl: './ssi.component.css'
})
export class SsiComponent {
  s = inject(SsiService);
}
