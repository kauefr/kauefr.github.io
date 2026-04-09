import { inject, Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResizeObserverService {
  ngZone = inject(NgZone);
  public observe(el: Element): Observable<ResizeObserverEntry> {
    return new Observable<ResizeObserverEntry>((subscriber) => {
      let rafId: number | null = null;

      const ro = new ResizeObserver((entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (rafId != null) cancelAnimationFrame(rafId);

        rafId = requestAnimationFrame(() =>
          this.ngZone.run(() => subscriber.next(entry)),
        );
      });

      ro.observe(el);

      return () => {
        ro.disconnect();
        if (rafId != null) cancelAnimationFrame(rafId);
      };
    });
  }
}
