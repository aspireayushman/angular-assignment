import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoansComponent } from './add-loans.component';

describe('AddLoansComponent', () => {
  let component: AddLoansComponent;
  let fixture: ComponentFixture<AddLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLoansComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
