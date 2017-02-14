/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SrsCustomerService } from './srs-customer.service';

describe('SrsCustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SrsCustomerService]
    });
  });

  it('should ...', inject([SrsCustomerService], (service: SrsCustomerService) => {
    expect(service).toBeTruthy();
  }));
});
