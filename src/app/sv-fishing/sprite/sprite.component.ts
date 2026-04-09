import {
  Component,
  ElementRef,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  map,
  Subject,
  takeUntil,
  startWith,
} from 'rxjs';
import { ResizeObserverService } from './resize-observer.service';
import { SpritesheetData, TextureType } from '../sv-fishing.model';
import { AsyncPipe } from '@angular/common';
import { instanceOfEnum } from '../../utils/misc';

@Component({
  selector: 'app-sprite',
  imports: [AsyncPipe],
  template: `<div class="sprite" [style]="style$ | async"></div>`,
  styles: `
    :host {
      display: inline flow-root;
    }

    .sprite {
      min-width: 16px;
      min-height: 16px;
      image-rendering: pixelated;
      background-repeat: no-repeat;
    }
  `,
})
export class SpriteComponent implements OnChanges, OnDestroy {
  private readonly el = inject(ElementRef);
  private readonly ros = inject(ResizeObserverService);

  @Input() sheet: TextureType = TextureType.Maps_springobjects;
  private readonly sheet$ = new BehaviorSubject<TextureType>(this.sheet);
  @Input() index = 0;
  private readonly index$ = new BehaviorSubject(this.index);

  private readonly destroy$ = new Subject<void>();
  private readonly size$ = this.ros.observe(this.el.nativeElement).pipe(
    takeUntil(this.destroy$),
    map((entry) => ({
      width: entry.contentRect.width,
      height: entry.contentRect.height,
    })),
    startWith({ width: 16, height: 16 }),
  );
  protected readonly style$ = combineLatest([
    this.sheet$,
    this.index$,
    this.size$,
  ]).pipe(map(([sheet, index, size]) => this.toStyle(sheet, index, size)));

  ngOnChanges(changes: SimpleChanges): void {
    const sheet = changes['sheet']?.currentValue;
    if (instanceOfEnum(TextureType, sheet)) this.sheet$.next(sheet);

    const index = changes['index']?.currentValue;
    if (typeof index === 'number') this.index$.next(index);
  }

  ngOnDestroy(): void {
    this.sheet$.complete();
    this.index$.complete();

    this.destroy$.next();
    this.destroy$.complete();
  }

  toStyle(sheet: TextureType, index: number, size: RectSize) {
    const data = SpritesheetData[sheet];
    const minSize = Math.max(Math.min(size.width, size.height), 1);
    const scalingFactor = minSize / data.spriteSize;
    const backgroundSize = `${data.width * scalingFactor}px ${data.height * scalingFactor}px`;
    const spritesPerRow = data.width / data.spriteSize;
    const positionX = (index % spritesPerRow) * data.spriteSize * scalingFactor;
    const positionY =
      Math.floor(index / spritesPerRow) * data.spriteSize * scalingFactor;
    const backgroundPosition = `-${positionX}px -${positionY}px`;

    return {
      width: `${minSize}px`,
      height: `${minSize}px`,
      backgroundImage: `url(${data.url})`,
      backgroundSize,
      backgroundPosition,
    };
  }
}

interface RectSize {
  width: number;
  height: number;
}
