import { DestroyRef, inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SsiService {
  private destroyRef = inject(DestroyRef);
  public $gold = signal(0);
  public $time = signal(Date.now());
  constructor(){
    const timer = setInterval(()=>{
      const now = Date.now();
      this.$gold.update(value => value + now - this.$time());
      this.$time.set(now);
    }, 1000);
    this.destroyRef.onDestroy(()=>clearInterval(timer));
  }
}
