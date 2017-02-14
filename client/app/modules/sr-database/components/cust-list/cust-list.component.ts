import { Component, OnInit } from '@angular/core';

import {SrsCustomerService} from '../../services/sr-customer.service';
import {SR_Customer} from '../../classes/SR_Customer';

@Component({
  selector: 'app-cust-list',
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
