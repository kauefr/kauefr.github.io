import { Directive, ElementRef, inject, OnInit } from '@angular/core';
import { ThemingService } from './theming.service';

@Directive({
  selector: '[appThemable]',
})
export class ThemableDirective implements OnInit {
  private readonly el = inject(ElementRef);
  private readonly s = inject(ThemingService);
  ngOnInit() {}
  constructor() {}
}
