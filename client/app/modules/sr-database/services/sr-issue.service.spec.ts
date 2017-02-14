/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SrIssueService } from './sr-issue.service';

describe('SrIssueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SrIssueService]
    });
  });

  it('should ...', inject([SrIssueService], (service: SrIssueService) => {
    expect(service).toBeTruthy();
  }));
});
