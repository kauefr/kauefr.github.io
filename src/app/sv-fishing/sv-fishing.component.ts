import { Component, inject } from '@angular/core';
import { LayoutComponent } from '../core/layout/layout.component';
import { SvFishingService } from './sv-fishing.service';
import { SpriteComponent } from './sprite/sprite.component';
import { TextureType } from './sv-fishing.model';

@Component({
  selector: 'app-sv-fishing',
  imports: [LayoutComponent, SpriteComponent],
  providers: [SvFishingService],
  templateUrl: './sv-fishing.component.html',
})
export class SvFishingComponent {
  protected readonly TextureType = TextureType;
  s = inject(SvFishingService);
  fishdata = {};
  items: { name: string; time: string }[] = [
    {
      name: 'Pufferfish',
      time: `[{ 'min time': 1200, 'max time': 1600 }]`,
    },
    {
      name: 'River Jelly',
      time: `[{ 'min time': 600, 'max time': 2600 }]`,
    },{
      name: 'River Jelly',
      time: `[{ 'min time': 600, 'max time': 2600 }]`,
    },{
      name: 'River Jelly',
      time: `[{ 'min time': 600, 'max time': 2600 }]`,
    },{
      name: 'River Jelly',
      time: `[{ 'min time': 600, 'max time': 2600 }]`,
    },{
      name: 'River Jelly',
      time: `[{ 'min time': 600, 'max time': 2600 }]`,
    },{
      name: 'River Jelly',
      time: `[{ 'min time': 600, 'max time': 2600 }]`,
    },{
      name: 'River Jelly',
      time: `[{ 'min time': 600, 'max time': 2600 }]`,
    },{
      name: 'River Jelly',
      time: `[{ 'min time': 600, 'max time': 2600 }]`,
    },{
      name: 'River Jelly',
      time: `[{ 'min time': 600, 'max time': 2600 }]`,
    },{
      name: 'River Jelly',
      time: `[{ 'min time': 600, 'max time': 2600 }]`,
    },{
      name: 'River Jelly',
      time: `[{ 'min time': 600, 'max time': 2600 }]`,
    },{
      name: 'River Jelly',
      time: `[{ 'min time': 600, 'max time': 2600 }]`,
    },
  ];
}
