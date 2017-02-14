import { Component, OnInit, Input } from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-oops',
  templateUrl: './oops.component.html',
  styleUrls: ['./oops.component.css']
})
export class OopsComponent implements OnInit {
  @Input()
  error: string;

  env: Object;

  constructor() {
    this.env = environment;
  }

  ngOnInit() {
  }

}
