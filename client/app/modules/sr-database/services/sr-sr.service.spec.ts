/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SrSrService } from './sr-sr.service';

describe('SrSrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SrSrService]
    });
  });

  it('should ...', inject([SrSrService], (service: SrSrService) => {
    expect(service).toBeTruthy();
  }));
});
