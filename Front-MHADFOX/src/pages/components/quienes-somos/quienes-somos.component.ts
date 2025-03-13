import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent {
  team = [
    { image: 'images/david.jpg', name: 'David Galguera', specialty: 'Desarrollo Web' },
    { image: 'images/felipe.jpg', name: 'Felipe Segura', specialty: 'Desarrollo Web' },
    { image: 'images/aldo.jpg', name: 'Aldo Gonzalez', specialty: 'Bases de datos' },
    { image: 'images/fernando.jpg', name: 'Fernando Medina', specialty: 'Back-End' },
    { image: 'images/alejandro.jpg', name: 'Alejandro Ramirez', specialty: 'Bases de datos' },
    { image: 'images/abraham.jpeg', name: 'Abraham Ornelas', specialty: 'Bases de datos.' },
    { image: 'images/hidai.jpg', name: 'Hidai Hernandez', specialty: 'Desarrollo Web' },
    { image: 'images/oscar.jpg', name: 'Oscar Martinez', specialty: 'Desarrollo Web' },
    { image: 'images/tucan.jpeg', name: 'Mario Cervantes', specialty: 'Analisis de datos' },
  ];
}
