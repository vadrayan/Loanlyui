import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoanComponentComponent } from './homeloan-component.component';

describe('NewComponentComponent', () => {
  let component: HomeLoanComponentComponent;
  let fixture: ComponentFixture<HomeLoanComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLoanComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeLoanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
