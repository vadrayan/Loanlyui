import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarLoanComponentComponent } from './car-loan-component/car-loan-component.component';
import { PersonalLoanComponent } from "./personal-loan/personal-loan.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponentComponent, FormsModule, CarLoanComponentComponent, PersonalLoanComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
  showNewComponent: boolean = false; // Add this property
  showCarLoanComponent: boolean = false; // Add this property
  showPersonalLoanComponent: boolean = false;


  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log('Target value is:',target.value);
    this.inputText = target.value;
    console.log('Input text is:',this.inputText);
   // this.isValid = validateTextBoxLength(target.value);
    //this.sum = add(this.number1, this.number2);
  }
  /*ngOnInit() {
    const newComponent = new NewComponentComponent();
    newComponent.validateTextBox;
  } */

  

    toggleNewComponent(): void {
      this.showNewComponent = !this.showNewComponent;
      if (this.showNewComponent) {
        this.showCarLoanComponent = false;
        this.showPersonalLoanComponent =false;
      }
    }
  
    toggleCarLoanComponent(): void {
      this.showCarLoanComponent = !this.showCarLoanComponent;
      if (this.showCarLoanComponent) {
        this.showNewComponent = false;
        this.showPersonalLoanComponent =false;
      }
    }

    togglePersonalLoanComponent(): void {
      this.showPersonalLoanComponent = !this.showPersonalLoanComponent;
      if (this.showPersonalLoanComponent) {
        this.showNewComponent = false;
        this.showCarLoanComponent =false;
      }
    }
  
}

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule to imports
    AppComponent,
    NewComponentComponent,
    CarLoanComponentComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }