import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './homeloan-component.component.html',
  styleUrls: ['./homeloan-component.component.scss']
})
export class HomeLoanComponentComponent {

  loanAmount: number = 0;
  interestRate: number = 0;
  tenure: number = 0;
  emi: number = 0;
  showAlert: boolean = false;
  showEarlyFinish: boolean = false;
  partPayment: number = 0;
  earlyFinishYears: number | null = null;
  takePartPayAmount: boolean = false;

  updateLoanAmount(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.loanAmount = Number(target.value);
  }

  alertEmiResult() {
    this.showAlert = true;
  }

  updateTenure(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.tenure = Number(target.value);
  }

  updateInterestRate(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.interestRate = Number(target.value);
  }

  updatePartPayment(event: Event) {
    const target = event.target as HTMLInputElement;
    this.partPayment = Number(target.value);
  }

  calculateEmi(): void {
    const monthlyInterestRate = this.interestRate / 12 / 100;
    const numberOfMonths = this.tenure * 12;
    this.emi = this.loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths) /
      (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
    this.emi = parseFloat(this.emi.toFixed(2));
    this.showEarlyFinish = true;
    this.takePartPayAmount = true;
  }

  alertEarlyFinish() {
    this.takePartPayAmount = true;
  }

  calculateEarlyFinish() {
    if (this.partPayment > 0) {
      const annualInterestRate = this.interestRate / 100;
      const annualPayment = this.emi * 12;
      let remainingLoan = this.loanAmount;
      let years = 0;

      while (remainingLoan > 0) {
        remainingLoan = remainingLoan + (remainingLoan * annualInterestRate) - annualPayment - this.partPayment;
        years++;
        if (years > this.tenure) break; // Prevent infinite loop
      }

      this.earlyFinishYears = years <= this.tenure ? years : null;
    }
  }

  ngOnChanges() {
    if (this.showEarlyFinish) {
      this.calculateEarlyFinish();
    }
  }

  returnToOriginal() {
    throw new Error('Method not implemented.');
  }
}
