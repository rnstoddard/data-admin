import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import {SrsCustomerService} from '../../services/sr-customer.service';
import {SR_Customer} from '../../classes/SR_Customer';

@Component({
  selector: 'sr-cust-list',
  providers: [SrsCustomerService],
  templateUrl: './cust-list.component.html',
  styleUrls: ['./cust-list.component.css']
})
export class CustListComponent implements OnInit {
  customers :SR_Customer[];
  constructor(private customerService : SrsCustomerService) {
  }

  ngOnInit() {
    this.customerService.getAll().subscribe(
      data => {
        this.customers = data;},
      error =>{ console.log("this error was reached");}
    );
  }
}

@Component({
  selector: 'sr-cust-info',
  template: `
  <p *ngIf="customer">
  {{customer.Cust_id}}
  {{customer.Cust_name}}
  {{customer.Poc_name}}
  {{customer.Street_Address}}
  {{customer.Poc_email}}
  {{customer.Poc_phone}}
  {{customer.City}}
  {{customer.Zip}}</p>
  `,
  providers: [SrsCustomerService],
  styleUrls: ['./sr-cust-info.component.css']
})
export class SrCustInfoComponent implements OnInit {
  customer :SR_Customer;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService : SrsCustomerService) {
      this.router.events.subscribe((event)=>{ this.ngOnInit(); });
    }

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.customerService.getCustById(id).subscribe(
      data => {
        this.customer = data;
      },
      error =>{ console.log("this error was reached");}
    );
  }
}
