/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SrEquipmentService } from './sr-equipment.service';

describe('SrEquipmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SrEquipmentService]
    });
  });

  it('should ...', inject([SrEquipmentService], (service: SrEquipmentService) => {
    expect(service).toBeTruthy();
  }));
});
