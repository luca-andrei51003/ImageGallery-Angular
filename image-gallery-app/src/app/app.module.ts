import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // For handling forms
import { HttpClientModule } from '@angular/common/http'; // For making API calls
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component'; // Ensure correct path

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ImageGalleryComponent,
    HttpClientModule
  ],
})
export class AppModule { }
