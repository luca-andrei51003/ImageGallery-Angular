import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // For handling forms
import { HttpClientModule } from '@angular/common/http'; // For making API calls
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component'; // Ensure correct path

@NgModule({
  declarations: [
    ImageGalleryComponent // Declare your non-standalone components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule // Include HttpClientModule if you're making API calls
  ],
  // No need for bootstrap array since AppComponent is standalone
})
export class AppModule { }
