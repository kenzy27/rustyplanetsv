import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { site } from '../../data/site-content';

@Component({
  selector: 'app-teaser',
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './teaser.html',
})
export class Teaser {
  protected readonly teaser = site.teaser;
  protected readonly playbackFailed = signal(false);
  protected readonly embedOpen = signal(false);
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly embedUrl = computed(() => {
    const source = this.teaser.source;
    if (!source || source.kind === 'file') return null;

    if (source.kind === 'youtube' && /^[\w-]{11}$/.test(source.videoId)) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube-nocookie.com/embed/${source.videoId}`,
      );
    }
    if (source.kind === 'vimeo' && /^\d+$/.test(source.videoId)) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://player.vimeo.com/video/${source.videoId}?dnt=1`,
      );
    }
    return null;
  });
}
