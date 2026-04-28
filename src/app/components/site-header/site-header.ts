import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-site-header',
  standalone: true,
  templateUrl: './site-header.html',
  styleUrls: ['./site-header.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteHeaderComponent {
  protected scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}