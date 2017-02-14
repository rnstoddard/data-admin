import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { SrHomeComponent } from './components/sr-home/sr-home.component';
import { CustListComponent, SrCustInfoComponent } from './components/cust-list/cust-list.component';
import { SrListComponent, SrSrInfoComponent } from './components/sr-list/sr-list.component';
import { IssueListComponent, SrIssueComponent } from './components/issue-list/issue-list.component';
import { EquipListComponent, SrEquipInfoComponent } from './components/equip-list/equip-list.component';

const srRoutes: Routes = [
  { path: '',  component: SrHomeComponent, children: [
    { path: 'customers', component:CustListComponent, children:[
        { path: ':id', component:SrCustInfoComponent}
    ]},
    { path: 'sr', component:SrListComponent, children: [
        { path: ':num', component:SrSrInfoComponent},
    ]},
    { path: 'issues', component:IssueListComponent, children:[
        {path: ':id', component:SrIssueComponent}
    ]},
    { path: 'equip', component:EquipListComponent, children : [
        { path: ':id', component:SrEquipInfoComponent}
    ]},

  ] },
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
    IssueListComponent,
    EquipListComponent,
    SrEquipInfoComponent
  ]
})
export class SrDatabaseModule { }
