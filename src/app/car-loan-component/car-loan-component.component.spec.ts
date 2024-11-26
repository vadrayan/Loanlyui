import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarLoanComponentComponent } from './car-loan-component.component';

describe('CarLoanComponentComponent', () => {
  let component: CarLoanComponentComponent;
  let fixture: ComponentFixture<CarLoanComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarLoanComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarLoanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
