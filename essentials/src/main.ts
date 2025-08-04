//This is one of the ways to show component on UI, but it's not recommended
// import { HeaderComponent } from './app/header.component';
// bootstrapApplication(HeaderComponent);

// does not work with modules
// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));

//for modules
import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

platformBrowser().bootstrapModule(AppModule);
