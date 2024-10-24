import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image-fetch.service';

interface ImageData {
  author: string;
  download_url: string;
}

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})

export class ImageGalleryComponent implements OnInit {
  images: ImageData[] = [];
  authors: string[] = [];
  selectedAuthor: string = '';
  filteredImages: ImageData[] = [];
  currentImageIndex: number = 0;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.getImages().subscribe((data: ImageData[]) => {
      this.images = data;
      this.authors = [...new Set(data.map(image => image.author))];
    });
  }

  onAuthorSelect(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedAuthor = target.value;
    this.filteredImages = this.images.filter(image => image.author === this.selectedAuthor);
    this.currentImageIndex = 0;
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
