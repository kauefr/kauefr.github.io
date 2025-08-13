import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { ThemeChooserService } from './theme-chooser.service';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
  selector: 'app-theme-chooser',
  imports: [FloatLabel, ReactiveFormsModule, Select],
  providers: [ThemeChooserService],
  templateUrl: './theme-chooser.component.html',
  styleUrl: './theme-chooser.component.css',
})
export class ThemeChooserComponent {
  private readonly s = inject(ThemeChooserService);
  protected $control = this.s.$control;
  protected $options = this.s.$options;
}
