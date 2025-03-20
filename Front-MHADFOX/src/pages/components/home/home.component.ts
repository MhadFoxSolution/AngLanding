import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  services = [
    { 
      image: 'images/ImgDevWeb.jpg',
      titulo: 'Desarrollo en plataformas',
      intro: 'Potenciamos tu presencia digital desarrollando soluciones a medida para diversas plataformas.',
      body: 'Estamos comprometidos con crear software que maximice tu productividad, adaptándonos a las necesidades de cada negocio. Ya sea para plataformas web, desktop o integraciones específicas, ofrecemos soluciones que se ajustan a tus objetivos. ¡Déjanos transformar tu visión en realidad tecnológica!'
    },
    { 
      image: 'images/ImgDevMobile.jpg',
      titulo: 'Desarrollo movil',
      intro: 'Lleva tu negocio a donde vayan tus usuarios con nuestras aplicaciones móviles personalizadas.',
      body: 'Diseñamos aplicaciones intuitivas y funcionales que conectan directamente con tu audiencia. Nos enfocamos en ofrecer experiencias móviles fluidas, ya sea para Android, iOS u otras tecnologías emergentes. Empezar de forma independiente nos permite cuidar cada detalle y garantizar la innovación en cada proyecto.'
    },
    { 
      image: 'images/ImgSoporte.jpg',
      titulo: 'Soporte de aplicaciones',
      intro: 'Aseguramos que tu software esté siempre funcionando al máximo rendimiento.',
      body: 'Sabemos que el mantenimiento y la evolución son clave para cualquier solución tecnológica. Por eso, ofrecemos soporte técnico y actualizaciones constantes, para que tus aplicaciones se mantengan siempre seguras, eficientes y alineadas con tus necesidades en crecimiento.'
    }
  ];
}
