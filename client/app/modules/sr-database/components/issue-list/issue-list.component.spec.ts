/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IssueListComponent } from './issue-list.component';

describe('issueListComponent', () => {
  let component: issueListComponent;
  let fixture: ComponentFixture<issueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ issueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
