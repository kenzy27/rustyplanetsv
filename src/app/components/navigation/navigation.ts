import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { navigation } from '../../data/site-content';

@Component({
  selector: 'app-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navigation.html',
})
export class Navigation {
  protected readonly links = navigation;
  protected readonly expanded = signal(false);

  protected toggle(): void {
    this.expanded.update(open => !open);
  }

  protected close(): void {
    this.expanded.set(false);
  }

  protected escape(toggle: HTMLButtonElement, event: Event): void {
    if (this.expanded()) {
      event.preventDefault();
      this.close();
      toggle.focus();
    }
  }
}
