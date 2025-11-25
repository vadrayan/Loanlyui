import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLoanComponentComponent } from './personal-loan.component';

describe('PersonalLoanComponent', () => {
  let component: PersonalLoanComponentComponent;
  let fixture: ComponentFixture<PersonalLoanComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalLoanComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalLoanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
