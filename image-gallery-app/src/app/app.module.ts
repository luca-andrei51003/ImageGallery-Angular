import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // If using forms like dropdowns
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { bootstrapApplication } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ImageGalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: []
})
export class AppModule { }
