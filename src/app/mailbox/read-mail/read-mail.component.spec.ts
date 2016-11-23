/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReadMailComponent } from './read-mail.component';

describe('ReadMailComponent', () => {
  let component: ReadMailComponent;
  let fixture: ComponentFixture<ReadMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
