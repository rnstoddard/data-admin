import { Component, OnInit } from '@angular/core';

import {SrIssueService} from '../../services/sr-issue.service';
import {SR_Issue} from '../../classes/SR_Issue';

@Component({
  selector: 'app-issue-list',
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
