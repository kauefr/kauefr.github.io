import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { StyleClassModule } from 'primeng/styleclass';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-home',
  imports: [PanelModule, StyleClassModule, FieldsetModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  host: {
    class: 'contents',
  },
})
export class HomeComponent {}
