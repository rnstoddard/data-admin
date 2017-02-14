import { Component, OnInit } from '@angular/core';

import {SrSrService} from '../../services/sr-sr.service';
import {SR_SR_Num} from '../../classes/SR_SR_Num';

@Component({
  selector: 'app-sr-list',
  providers: [SrSrService],
  templateUrl: './sr-list.component.html',
  styleUrls: ['./sr-list.component.css']
})
export class SrListComponent implements OnInit {
  srs :SR_SR_Num[];

  constructor(private srService :SrSrService) { }

  ngOnInit() {
    this.srService.getAll().subscribe(

      data => {
        this.srs = data;
      },
      error =>{ console.log("this error was reached");}
    );
  }
}
