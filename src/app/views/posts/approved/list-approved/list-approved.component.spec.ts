import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApprovedComponent } from './list-approved.component';

describe('ListApprovedComponent', () => {
  let component: ListApprovedComponent;
  let fixture: ComponentFixture<ListApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
