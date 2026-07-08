import { Component, signal } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { ThemeChooserComponent } from '../theme-chooser/theme-chooser.component';

@Component({
  selector: 'app-navbar',
  imports: [Menubar, ThemeChooserComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  protected readonly menubarItems = signal<MenuItem[]>([
    {
      label: 'Home',
      icon: PrimeIcons.HOME,
      routerLink: '/',
    },
    {
      label: 'Comparador CDB/LCA',
      icon: PrimeIcons.MONEY_BILL,
      routerLink: '/comparador-cdb-lca',
    },
    {
      label: 'Seven Seas Idle',
      icon: PrimeIcons.PLAY,
      routerLink: '/ssi',
    },
    {
      label: 'Stardew Valley Fishing',
      icon: PrimeIcons.CALENDAR_CLOCK,
      routerLink: '/sv-fishing',
    },
  ]);
}
