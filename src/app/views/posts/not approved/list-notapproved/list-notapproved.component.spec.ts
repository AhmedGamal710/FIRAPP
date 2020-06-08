import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNotapprovedComponent } from './list-notapproved.component';

describe('ListNotapprovedComponent', () => {
  let component: ListNotapprovedComponent;
  let fixture: ComponentFixture<ListNotapprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNotapprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNotapprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
