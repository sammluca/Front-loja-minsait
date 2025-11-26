import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
  imports: [DecimalPipe]
})
export class ProductCard {
  @Input() produto: any;

  slideIndex = 0;
  carouselInterval: any;

  startCarousel() {
    if (!this.produto?.imagens || this.produto.imagens.length <= 1) return;

    this.carouselInterval = setInterval(() => {
      this.slideIndex = (this.slideIndex + 1) % this.produto.imagens.length;
    }, 1200); 
  }

  stopCarousel() {
    clearInterval(this.carouselInterval);
    this.slideIndex = 0;
  }
}

