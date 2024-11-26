import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent {

  loanAmount: number = 0;
  interestRate: number = 0;
  tenure: number = 0;
  emi: number = 0;
  showAlert: boolean = false;
  showEarlyFinish: boolean = false;
  partPayment: number =0;
earlyFinishYears: number=0;
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

  calculateEmi(): void {
    const principal = this.loanAmount;
    const rate = this.interestRate / 12 / 100;
    const time = this.tenure * 12;

    this.emi = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
    this.emi = parseFloat(this.emi.toFixed(2));
    this.showEarlyFinish = true;

    setTimeout(() => {
      const userResponse = confirm("Do you want to finish your home loan early?");
      if (userResponse) {
        this.alertEarlyFinish();
      }
    }, 5);
  }
  
  alertEarlyFinish() {
    this.takePartPayAmount = true
    }
    
  calculateEarlyFinish() {
    
      // Call API to calculate new tenure
      fetch('http://localhost:8081/loan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          loanAmount: this.loanAmount,
          partPayment: this.partPayment,
          interestRate: this.interestRate,
          tenure: this.tenure
        })
      })
      .then(response => response.json())
      .then(data => {
        this.earlyFinishYears = data.tenure;
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }

    updatePartPayment(event: Event) {
      const target = event.target as HTMLInputElement;
      this.partPayment = Number(target.value);

     // throw new Error('Method not implemented.');
      }
      
      
      returnToOriginal() {
  //      this.showAlert = false;
  //      this.showEarlyFinish = false;
        throw new Error('Method not implemented.');
        }
          
      
    
}
