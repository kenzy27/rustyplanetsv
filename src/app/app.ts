import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Navigation } from './components/navigation/navigation';
import { Hero } from './components/hero/hero';
import { Teaser } from './components/teaser/teaser';
import { ScreenshotGallery } from './components/screenshot-gallery/screenshot-gallery';
import { site } from './data/site-content';

@Component({
  selector: 'app-root',
  imports: [Navigation, Hero, Teaser, ScreenshotGallery, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
})
export class App {
  protected readonly site = site;
  protected readonly crewNames = site.crew.map(member => member.name).join(' / ');

  constructor() {
    const document = inject(DOCUMENT);
    afterNextRender(() => {
      const anchor = document.location.hash.slice(1);
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'instant' });
    });
  }
}
