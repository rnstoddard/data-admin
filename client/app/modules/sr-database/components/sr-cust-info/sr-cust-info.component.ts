import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';


import {SrsCustomerService} from '../../services/sr-customer.service';
import {SR_Customer} from '../../classes/SR_Customer';

@Component({
  selector: 'app-sr-cust-info',
  templateUrl: './sr-cust-info.component.html',
  providers: [SrsCustomerService],
  styleUrls: ['./sr-cust-info.component.css']
})
export class SrCustInfoComponent implements OnInit {
  customer :SR_Customer;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService : SrsCustomerService) { }

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
