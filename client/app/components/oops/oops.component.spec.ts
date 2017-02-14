/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OopsComponent } from './oops.component';

describe('OopsComponent', () => {
  let component: OopsComponent;
  let fixture: ComponentFixture<OopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
