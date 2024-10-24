import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image-fetch.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  images: any[] = [];
  authors: string[] = [];
  selectedAuthor: string = '';
  filteredImages: any[] = [];
  currentImageIndex: number = 0;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.getImages().subscribe(data => {
      this.images = data;
      this.authors = [...new Set(data.map((image: any) => image.author))]; // Get unique authors
    });
  }

  onAuthorSelect(author: string): void {
    this.selectedAuthor = author;
    this.filteredImages = this.images.filter(image => image.author === author);
    this.currentImageIndex = 0; // Reset to the first image
  }

  nextImage(): void {
    if (this.currentImageIndex < this.filteredImages.length - 1) {
      this.currentImageIndex++;
    }
  }

  prevImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }
}
