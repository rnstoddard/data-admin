import { Component } from '@angular/core';
import { Link } from './components/nav-bar/link';
import { LINKS } from './app-routing/topNavLinks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  links = LINKS;
}
