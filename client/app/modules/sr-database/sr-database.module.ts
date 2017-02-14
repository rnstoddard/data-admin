import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { SrHomeComponent } from './components/sr-home/sr-home.component';
import { CustListComponent } from './components/cust-list/cust-list.component';
import { SrCustInfoComponent } from './components/sr-cust-info/sr-cust-info.component';
import { SrListComponent } from './components/sr-list/sr-list.component';
import { SrSrInfoComponent } from './components/sr-sr-info/sr-sr-info.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { SrIssueComponent } from './components/sr-issue/sr-issue.component';

const srRoutes: Routes = [
  { path: '',   redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component:CustListComponent },
  { path: 'sr', component:SrListComponent },
  { path: 'sr/:num', component:SrSrInfoComponent },
  { path: 'issues', component:IssueListComponent },
  { path: 'customer/:id', component:SrIssueComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(srRoutes)
  ],
  declarations: [
    SrHomeComponent,
    SrCustInfoComponent,
    SrSrInfoComponent,
    SrIssueComponent,
    CustListComponent,
    SrListComponent,
    SrListComponent,
    IssueListComponent
  ]
})
export class SrDatabaseModule { }
