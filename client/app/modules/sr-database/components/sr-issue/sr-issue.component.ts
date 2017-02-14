import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {SrIssueService} from '../../services/sr-issue.service';
import {SR_Issue} from '../../classes/SR_Issue';

@Component({
  selector: 'app-sr-issue',
  providers: [SrIssueService],
  templateUrl: './sr-issue.component.html',
  styleUrls: ['./sr-issue.component.css']
})
export class SrIssueComponent implements OnInit {
  issue :SR_Issue;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private issueService : SrIssueService) { }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.issueService.getIssueById(id).subscribe(
      data => {
        this.issue = data;
      },
      error =>{ console.log("this error was reached");}
    );
  }

}
