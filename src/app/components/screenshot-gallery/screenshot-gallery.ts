import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal, viewChild, ElementRef } from '@angular/core';
import { type ArchiveImage, site } from '../../data/site-content';

@Component({
  selector: 'app-screenshot-gallery',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './screenshot-gallery.html',
})
export class ScreenshotGallery {
  protected readonly screenshots = site.screenshots;
  protected readonly activeIndex = signal(0);
  protected readonly isOpen = signal(false);
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('lightbox');
  private readonly document = inject(DOCUMENT);
  private opener: HTMLButtonElement | null = null;
  private touchStart: { x: number; y: number } | null = null;

  protected caption(image: ArchiveImage, index: number): string {
    return image.caption ?? `Visual record ${String(index + 1).padStart(3, '0')}`;
  }

  protected recordNumber(value: number): string {
    return String(value).padStart(2, '0');
  }

  protected open(trigger: HTMLButtonElement): void {
    this.opener = trigger;
    this.dialog().nativeElement.showModal();
    this.isOpen.set(true);
    this.document.documentElement.classList.add('lightbox-open');
  }

  protected close(): void {
    this.dialog().nativeElement.close();
  }

  protected restoreFocus(): void {
    this.isOpen.set(false);
    this.document.documentElement.classList.remove('lightbox-open');
    this.touchStart = null;
    this.opener?.focus({ preventScroll: true });
    this.opener = null;
  }

  protected move(step: number): void {
    const count = this.screenshots.length;
    if (count > 1) this.activeIndex.update(index => (index + step + count) % count);
  }

  protected onKey(event: Event, step: number): void {
    event.preventDefault();
    this.move(step);
  }

  protected startSwipe(event: TouchEvent): void {
    const touch = event.touches.length === 1 ? event.touches[0] : undefined;
    this.touchStart = touch ? { x: touch.clientX, y: touch.clientY } : null;
  }

  protected cancelSwipe(): void {
    this.touchStart = null;
  }

  protected endSwipe(event: TouchEvent): void {
    const start = this.touchStart;
    const end = event.changedTouches[0];
    this.cancelSwipe();
    if (!start || !end || this.screenshots.length < 2) return;

    const dx = end.clientX - start.x;
    const dy = end.clientY - start.y;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
      event.preventDefault();
      this.move(dx < 0 ? 1 : -1);
    }
  }
}
