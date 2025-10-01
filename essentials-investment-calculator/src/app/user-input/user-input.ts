import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input-model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css'
})
export class UserInput {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit() {
    console.log("Submitted");
    console.log(this.enteredInitialInvestment);
    console.log(this.enteredAnnualInvestment);
    console.log(this.enteredDuration);
    console.log(this.enteredExpectedReturn);

    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
    });
  }
}
