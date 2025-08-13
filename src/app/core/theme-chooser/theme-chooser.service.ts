import { FormControl } from '@angular/forms';
import { DestroyRef, inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Theme } from './theme';

@Injectable({ providedIn: 'root' })
export class ThemeChooserService {
  private readonly destroyRef = inject(DestroyRef);

  private readonly darkModeMediaQuery = window.matchMedia(
    '(prefers-color-scheme: dark)'
  );

  public readonly $options = signal([Theme.DARK_THEME, Theme.LIGHT_THEME]);
  public readonly $control = signal(this.buildControl());

  constructor() {
    this.setupMediaQueryListener(this.darkModeMediaQuery, this.destroyRef);
    this.setupCSSClassHandler(this.destroyRef);
    this.$control().reset();
  }

  private buildControl(initialValue?: Theme): FormControl<Theme> {
    return new FormControl<Theme>(
      initialValue ?? Theme.fromMediaQuery(this.darkModeMediaQuery),
      { nonNullable: true }
    );
  }

  private setupMediaQueryListener(
    query: MediaQueryList,
    destroyRef: DestroyRef
  ): void {
    const listener = (e: MediaQueryListEvent) => {
      this.$control().setValue(Theme.fromMediaQuery(e));
    };

    query.addEventListener('change', listener);
    destroyRef.onDestroy(() => query.removeEventListener('change', listener));
  }

  private setupCSSClassHandler(destroyRef: DestroyRef): void {
    this.$control()
      .valueChanges.pipe(takeUntilDestroyed(destroyRef))
      .subscribe((value) => {
        switch (value) {
          case Theme.DARK_THEME:
            document.documentElement.classList.add('p-dark');
            break;
          case Theme.LIGHT_THEME:
            document.documentElement.classList.remove('p-dark');
            break;
          default:
            throw new RangeError();
        }
      });
  }
}
