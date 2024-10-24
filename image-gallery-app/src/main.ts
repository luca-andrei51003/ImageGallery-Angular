import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Adjust the path if necessary
import { provideHttpClient } from '@angular/common/http'; // Include if using HttpClient

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient() // Include this if you are using HttpClient
  ]
});
