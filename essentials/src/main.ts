import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
//This is one of the ways to show component on UI, but it's not recommended
// import { HeaderComponent } from './app/header.component';
// bootstrapApplication(HeaderComponent);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
