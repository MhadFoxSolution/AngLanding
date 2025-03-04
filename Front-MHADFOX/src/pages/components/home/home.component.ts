import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, CarouselModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
export class HomeComponent {
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

  carouselImages: string[] = [
    'images/Carrusel-1.jfif',
    'images/Carrusel-2.gif',
    'images/Carrusel-3.jfif',
    'images/LogoMHADFOX.png'
  ];

  cards = [
    { image: 'images/abraham.jpeg', nombre: 'Jonathan Abraham ', descripcion: '[FRASE MOTIVADORA]' },
    { image: 'images/aldo.jpg', nombre: 'Aldo Gonzalez', descripcion: '[FRASE MOTIVADORA]' },
    { image: 'images/felipe.jpg', nombre: 'Felipe Segura', descripcion: '[FRASE MOTIVADORA]' },
    { image: 'images/LogoMHADFOX.png', nombre: 'Mario Cervantes', descripcion: '[FRASE MOTIVADORA]' },
    { image: 'images/alejandro.jpg', nombre: 'Alejandro Ramirez', descripcion: '[FRASE MOTIVADORA]' },
    { image: 'images/hidai.jpg', nombre: 'Hidai Hernandez', descripcion: '[FRASE MOTIVADORA]' },
    { image: 'images/ustedcan.jpeg', nombre: 'Xavier Torres', descripcion: 'HUUUUUHG!!!' },
    { image: 'images/david.jpg', nombre: 'David Galguera', descripcion: '[FRASE MOTIVADORA]' },
    { image: 'images/oscar.jpg', nombre: 'Oscar Martinez', descripcion: '[FRASE MOTIVADORA]' },
    { image: 'images/fernando.jpg', nombre: 'Fernando Medina', descripcion: '[FRASE MOTIVADORA]' }
  ];

  services =[
    { image: 'images/computo.png',titulo: 'Desarrollo en plataformas', descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta natus porro repellendus, atque blanditiis harum provident qui modi voluptatem labore quis distinctio commodi sed corporis ipsam a enim voluptates itaque.'},
    { image: 'images/equipo_1.png', titulo: 'Desarrollo a medida del usuario', descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta natus porro repellendus, atque blanditiis harum provident qui modi voluptatem labore quis distinctio commodi sed corporis ipsam a enim voluptates itaque.'}
  ];

  //Se le agregó este metodo para que nos regresara el índice como clave única
  trackByFn(index: number, item: string): any {
    return index; 
  }

  // Métodos para controlar la animación
  startRotation() {
    this.state = 'start';
  }

  stopRotation() {
    this.state = 'stop';
  }
}
