import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-loan-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './personal-loan.component.html',
  styleUrl: './personal-loan.component.scss'
})
export class PersonalLoanComponentComponent {
 loanAmount: number = 0;
  interestRate: number = 0;

  tenure: number = 0;
  emi: number = 0;
  updateLoanAmount(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.loanAmount = Number(target.value);
  }

  updateTenure(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.tenure = Number(target.value);
  }

  updateInterestRate(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.interestRate = Number(target.value);
  }

  calculateEmi(): void {
    const principal = this.loanAmount;
    const rate = this.interestRate / 12 / 100;
    const time = this.tenure * 12;

    this.emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    this.emi = parseFloat(this.emi.toFixed(2));
  }
}
