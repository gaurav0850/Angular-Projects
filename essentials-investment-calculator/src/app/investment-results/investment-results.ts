import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, input, Input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
})
export class InvestmentResults {
  // results = input<
  //   {
  //     year: number;
  //     interest: number;
  //     valueEndOfYear: number;
  //     annualInvestment: number;
  //     totalInterest: number;
  //     totalAmountInvested: number;
  //   }[]
  // >();
  // @Input() results?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];

  private investmentService = inject(InvestmentService);

  // get results() {
  //   return this.investmentService.resultsData;
  // }

  results = computed(() => this.investmentService.resultData());

  // results = this.investmentService.resultsData.asReadonly();
}
