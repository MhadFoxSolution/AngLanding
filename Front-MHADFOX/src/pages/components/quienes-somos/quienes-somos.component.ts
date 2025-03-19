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
    { image: 'images/abraham.webp', nombre: 'Jonathan Abraham ', descripcion: '[ESPECIALIDAD DE TI]' },
    { image: 'images/aldo.webp', nombre: 'Aldo Gonzalez', descripcion: '[ESPECIALIDAD DE TI]' },
    { image: 'images/felipe.webp', nombre: 'Felipe Segura', descripcion: '[ESPECIALIDAD DE TI]' },
    { image: 'images/LogoMHADFOX.png', nombre: 'Mario Cervantes', descripcion: '[ESPECIALIDAD DE TI]' },
    { image: 'images/alejandro.webp', nombre: 'Alejandro Ramirez', descripcion: '[ESPECIALIDAD DE TI]' },
    { image: 'images/hidai.webp', nombre: 'Hidai Hernandez', descripcion: '[ESPECIALIDAD DE TI]' },
    { image: 'images/david.webp', nombre: 'David Galguera', descripcion: '[ESPECIALIDAD DE TI]' },
    { image: 'images/oscar.webp', nombre: 'Oscar Martinez', descripcion: '[ESPECIALIDAD DE TI]' },
    { image: 'images/fernando.webp', nombre: 'Fernando Medina', descripcion: '[ESPECIALIDAD DE TI]' }
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
