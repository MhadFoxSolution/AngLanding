import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import emailjs from 'emailjs-com';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-contacto',
  imports: [
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  title = 'Envia Correo';
  datos: FormGroup;

  constructor() {
    this.datos = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      asunto: new FormControl('', Validators.required,  ),
      mensaje: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required)
    });
  }

  envioCorreo() {
    Notiflix.Loading.hourglass('Enviando correo', {
      backgroundColor: 'rgba(223,227,220,0.8)',
      messageColor: '#f24405',
      messageFontSize: '25px',
      svgColor: '#012E40',
      fontFamily: ''
    });

    // Configurar parámetros para EmailJS
    const formData = {
      nombre: this.datos.value.nombre,
      email: this.datos.value.email,
      asunto: this.datos.value.asunto,
      mensaje: this.datos.value.mensaje
    };

    emailjs.send('service_u02tj7l', 'template_nby9ohh', formData, 'C4lMqbh9l1paqAhoL')
      .then(response => {
        console.log('Correo enviado:', response);
        Notiflix.Loading.remove();
        Notiflix.Notify.success('Correo enviado correctamente', {
          success: {
            background: '',
            textColor: '#FFFFFF',
            childClassName: 'notiflix-notify-success',
            notiflixIconColor: 'rgb(255, 255, 255)',
            fontAwesomeClassName: 'fas fa-check-circle',
            fontAwesomeIconColor: '#f24405',
            backOverlayColor: 'rgb(242,68,5)'
          }
        });

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch(error => {
        console.error('Error al enviar el correo:', error);
        Notiflix.Loading.remove();
        Notiflix.Notify.failure('Error al enviar el correo. Por favor, intenta nuevamente.');
      });
  }
}