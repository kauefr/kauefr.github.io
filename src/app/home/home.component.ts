import { Component } from '@angular/core';
import { Panel } from 'primeng/panel';
import { Fieldset } from 'primeng/fieldset';
import { LayoutComponent } from '../core/layout/layout.component';

@Component({
  selector: 'app-home',
  imports: [Panel, Fieldset, LayoutComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
