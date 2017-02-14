import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {SrIssueService} from '../../services/sr-issue.service';
import {SR_Issue} from '../../classes/SR_Issue';

@Component({
  selector: 'sr-issue-list',
  providers: [SrIssueService],
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  issues :SR_Issue[];
  constructor(private issueService : SrIssueService) { }

  ngOnInit() {
    this.issueService.getAll().subscribe(
      data => {
        this.issues = data;
      },
      error =>{ console.log("Error getting isseList data")}
    );
  }

}

@Component({
  selector: 'sr-issue',
  template: `
  <p *ngIf="issue">
  {{issue.Issue_id}}
  {{issue.Issue_Type}}
  {{issue.Issue_status}}
  {{issue.IN_Date}}
  {{issue.Out_Date}}
  {{issue.Scheduled_Out}}
  </p>
  `,
  providers: [SrIssueService],
  styleUrls: ['./sr-issue.component.css']
})
export class SrIssueComponent implements OnInit {
  issue :SR_Issue;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private issueService : SrIssueService) {
      this.router.events.subscribe((event)=>{ this.ngOnInit(); });
    }

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
