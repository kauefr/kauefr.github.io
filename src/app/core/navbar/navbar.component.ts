import {
  Component,
  signal,
} from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { SelectModule } from 'primeng/select';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ThemeChooserComponent } from '../theme-chooser/theme-chooser.component';

@Component({
  selector: 'app-navbar',
  imports: [
    MenubarModule,
    SelectModule,
    MenuModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeChooserComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  protected readonly $menubarItems = signal<MenuItem[]>([
    {
      label: 'Home',
      icon: PrimeIcons.HOME,
      routerLink: '/',
    },
  ]);
}
