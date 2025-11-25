import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeLoanComponentComponent } from './homeloan-component/homeloan-component.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarLoanComponentComponent } from './car-loan-component/car-loan-component.component';
import { PersonalLoanComponentComponent } from './personal-loan-component/personal-loan.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeLoanComponentComponent, FormsModule, CarLoanComponentComponent, PersonalLoanComponentComponent],
  templateUrl: './app.component.html'
  //styleUrls: ['./app.component.scss', '../styles.scss'] // Include src/styles.css
})
export class AppComponent {
  title = 'Loan EMI Calculator';
  number1: number = 0;
  number2: number = 0;
  sum: number = 0;
  inputText: string = '';
  isValid: boolean = false;
  minLength: number = 2;
  maxLength: number = 5;
  showHomeLoanComponent: boolean = false; // Add this property
  showCarLoanComponent: boolean = false; // Add this property
  showPersonalLoanComponent: boolean = false;

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log('Target value is:', target.value);
    this.inputText = target.value;
    console.log('Input text is:', this.inputText);
    // this.isValid = validateTextBoxLength(target.value);
    // this.sum = add(this.number1, this.number2);
  }

  toggleNewComponent(): void {
    this.showHomeLoanComponent = !this.showHomeLoanComponent;
    if (this.showHomeLoanComponent) {
      this.showCarLoanComponent = false;
      this.showPersonalLoanComponent = false;
    }
  }

  toggleCarLoanComponent(): void {
    this.showCarLoanComponent = !this.showCarLoanComponent;
    if (this.showCarLoanComponent) {
      this.showHomeLoanComponent = false;
      this.showPersonalLoanComponent = false;
    }
  }

  togglePersonalLoanComponent(): void {
    this.showPersonalLoanComponent = !this.showPersonalLoanComponent;
    if (this.showPersonalLoanComponent) {
      this.showHomeLoanComponent = false;
      this.showCarLoanComponent = false;
    }
  }
}

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule to imports
    AppComponent,
    HomeLoanComponentComponent,
    CarLoanComponentComponent,
    PersonalLoanComponentComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }