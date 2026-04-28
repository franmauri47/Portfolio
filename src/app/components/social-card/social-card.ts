import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-social-card',
  imports: [NgOptimizedImage],
  templateUrl: './social-card.html',
  styleUrls: ['./social-card.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialCardComponent {
  readonly title = input.required<string>();
  readonly link = input.required<string>();
  readonly imageSrc = input.required<string>();
  readonly imageAlt = input('Social logo');
  readonly linkLabel = input('Click here');
}
