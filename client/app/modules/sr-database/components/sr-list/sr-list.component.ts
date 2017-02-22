import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {SrSrService} from '../../services/sr-sr.service';
import {SR_SR_Num} from '../../classes/SR_SR_Num';

@Component({
  selector: 'sr-list',
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

@Component({
  selector: 'sr-sr-info',
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
  ) {
  this.router.events.subscribe((event)=>{ this.ngOnInit(); }); }

  ngOnInit() {
    let num = +this.route.snapshot.params['num'];
    this.srService.getSrByNum(num).subscribe(
      data => {
        this.sr = data;
      },
      error =>{ console.log("this error was reached");}
    );
  }

}
