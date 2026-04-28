import { Component } from '@angular/core';
import { SiteHeaderComponent } from './components/site-header/site-header';
import { DescriptionComponent } from './components/description/description';
import { SocialCardComponent } from './components/social-card/social-card';
import { ContactComponent } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SiteHeaderComponent, DescriptionComponent, SocialCardComponent, ContactComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
readonly currentYear = () => new Date().getFullYear();
}
