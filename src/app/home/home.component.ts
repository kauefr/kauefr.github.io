import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { StyleClassModule } from 'primeng/styleclass';
import { FieldsetModule } from 'primeng/fieldset';
import { NavbarComponent } from "../core/navbar/navbar.component";

@Component({
  selector: 'app-home',
  imports: [PanelModule, StyleClassModule, FieldsetModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
