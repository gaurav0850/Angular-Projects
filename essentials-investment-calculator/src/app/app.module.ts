import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { Header } from './header/header';
import { InvestmentResults } from './investment-results/investment-results';
import { UserInput } from './user-input/user-input';

@NgModule({
  declarations: [App, Header, UserInput, InvestmentResults],
  imports: [BrowserModule, FormsModule],
  bootstrap: [App]
})
export class AppModule {}
