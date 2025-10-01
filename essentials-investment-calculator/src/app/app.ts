import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import type { InvestmentInput } from './investment-input-model';
import { InvestmentResults } from './investment-results/investment-results';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}
