import { Component, Input } from '@angular/core';
import { Link } from './link';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input()
  links: Link[];

  constructor() {
  }
}
