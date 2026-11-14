import { DOCUMENT, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
    if (site.font) {
      const stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = site.font.stylesheet;
      document.head.append(stylesheet);
      document.documentElement.style.setProperty('--game-font', `"${site.font.family}"`);
    }
  }
}
