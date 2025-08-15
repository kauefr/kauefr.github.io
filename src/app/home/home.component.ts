import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { Fieldset } from 'primeng/fieldset';
import { NavbarComponent } from '../core/navbar/navbar.component';

@Component({
  selector: 'app-home',
  imports: [PanelModule, Fieldset, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
