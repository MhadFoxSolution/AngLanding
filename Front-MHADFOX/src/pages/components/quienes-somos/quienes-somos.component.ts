import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'; // Importación añadida
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule, // Módulo añadido aquí
    CarouselModule
  ],
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css'],
  animations: [
    trigger('rotate', [
      state('stop', style({ transform: 'rotate(0deg)' })),
      state('start', style({ transform: 'rotate(0deg)' })),
      transition('stop => start', [
        animate('5s linear', keyframes([
          style({ transform: 'rotate(0deg)', offset: 0 }),
          style({ transform: 'rotate(360deg)', offset: 1 })
        ]))
      ]),
      transition('start => stop', animate('0s'))
    ])
  ]
})
export class QuienesSomosComponent {
  state = 'stop';

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

  carouselImages: string[] = [];

  cards = [
    { image: 'images/abraham.webp', nombre: 'Jonathan Abraham ', descripcion: 'Base de datos' },
    { image: 'images/aldo.webp', nombre: 'Aldo Gonzalez', descripcion: 'Base de datos' },
    { image: 'images/felipe.webp', nombre: 'Felipe Segura', descripcion: 'Full Stack' },
    { image: 'images/mario.webp', nombre: 'Mario Cervantes', descripcion: 'Analisis de datos' },
    { image: 'images/alejandro.webp', nombre: 'Alejandro Ramirez', descripcion: 'Desarrollo Back-End' },
    { image: 'images/hidai.webp', nombre: 'Hidai Hernandez', descripcion: 'Desarrollo Back-End' },
    { image: 'images/david.webp', nombre: 'David Galguera', descripcion: 'Desarrollo Web' },
    { image: 'images/oscar.webp', nombre: 'Oscar Martinez', descripcion: 'Desarrollo Web' },
    { image: 'images/fernando.webp', nombre: 'Fernando Medina', descripcion: 'Desarrollo Back-End' }
  ];

  trackByFn(index: number, item: { image: string; nombre: string; descripcion: string }): any {
    return index; // Utiliza el índice como clave única
  }
  

  startRotation() {
    this.state = 'start';
  }

  stopRotation() {
    this.state = 'stop';
  }
}
