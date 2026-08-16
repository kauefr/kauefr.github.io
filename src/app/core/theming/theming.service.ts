import { DestroyRef, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemingService {
  private readonly destroyRef = inject(DestroyRef);
  private readonly prefersDarkQuery = window.matchMedia(
    '(prefers-color-scheme: dark)',
  );
  private readonly listener = (ev: MediaQueryListEvent) =>
    this.onPrefersDarkChanged(ev.matches);

  constructor() {
    this.setupMediaQueryListener();
    this.onPrefersDarkChanged(this.prefersDarkQuery.matches);
  }

  private setupMediaQueryListener() {
    this.prefersDarkQuery.addEventListener('change', this.listener);
    this.destroyRef.onDestroy(() =>
      this.prefersDarkQuery.removeEventListener('change', this.listener),
    );
  }

  private onPrefersDarkChanged(prefersDark: boolean) {}
}
