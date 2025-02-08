import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, CarouselModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Configuración del carrusel
  carouselOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  };

  // Imágenes para el carrusel
  carouselImages: string[] = [
    'images/LogoMHADFOX.png',
    'images/LogoMHADFOX.png',
    'images/LogoMHADFOX.png',
    'images/LogoMHADFOX.png',
    'images/LogoMHADFOX.png'
  ];

  // Datos para las tarjetas
  cards = [
    { image: 'images/LogoMHADFOX.png', description: 'Jonathan Abraham - [Frase]' },
    { image: 'images/LogoMHADFOX.png', description: 'Aldo Gonzalez - [Frase]' },
    { image: 'images/LogoMHADFOX.png', description: 'Felipe Segura - [Frase]' },
    { image: 'images/LogoMHADFOX.png', description: 'Mario Cervantes - [Frase]' },
    { image: 'images/LogoMHADFOX.png', description: 'Alejandro Ramirez - [Frase]' },
    { image: 'images/LogoMHADFOX.png', description: 'Hidai Hernandez - [Frase]' },
    { image: 'images/LogoMHADFOX.png', description: 'Xavier Torres - [Frase]' },
    { image: 'images/LogoMHADFOX.png', description: 'David Galguera - [Frase]' },
    { image: 'images/LogoMHADFOX.png', description: 'Oscar Martinez - [Frase]' },
    { image: 'images/LogoMHADFOX.png', description: 'Fernando Medina - [Frase]' }
  ];
}
