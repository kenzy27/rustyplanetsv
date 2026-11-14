import { ChangeDetectionStrategy, Component } from '@angular/core';
import { site } from '../../data/site-content';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly site = site;
}
