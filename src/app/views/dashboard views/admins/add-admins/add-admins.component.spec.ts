import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminsComponent } from './add-admins.component';

describe('AddAdminsComponent', () => {
  let component: AddAdminsComponent;
  let fixture: ComponentFixture<AddAdminsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdminsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
