import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {SrSrService} from '../../services/sr-sr.service';
import {SR_SR_Num} from '../../classes/SR_SR_Num';

@Component({
  selector: 'app-sr-sr-info',
  providers: [SrSrService],
  templateUrl: './sr-sr-info.component.html',
  styleUrls: ['./sr-sr-info.component.css']
})
export class SrSrInfoComponent implements OnInit {
  sr :SR_SR_Num;

  constructor(
    private srService :SrSrService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    let num = +this.route.snapshot.params['num'];
    this.srService.getSrByNum(num).subscribe(
      data => {
        this.sr = data;},
      error =>{ console.log("this error was reached");}
    );
  }

}
