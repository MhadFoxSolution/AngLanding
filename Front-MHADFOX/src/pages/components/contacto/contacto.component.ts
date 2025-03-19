import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms'; 
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
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  title = 'Envia Correo';
  datos: FormGroup;
 
  constructor(private httpClient: HttpClient) {
    this.datos = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      asunto: new FormControl('', Validators.required),
      mensaje: new FormControl('', Validators.required)
    });
  }

  envioCorreo() {
    Notiflix.Loading.hourglass('Enviando correo', {
      backgroundColor: 'rgba(223,227,220,0.8)',
      messageColor: '#f24405',
      messageFontSize: '25px',
      svgColor: '#012E40',
      fontFamily: '',
    });

    const params = {
      email: "mhad.fox.solution@gmail.com",
      asunto: this.datos.value.asunto,
      mensaje: `Correo de contacto: ${this.datos.value.email}\nMensaje del cliente: ${this.datos.value.mensaje}`
    };

    this.httpClient.post('http://localhost:3000/envio', params).subscribe({
      next: (resp) => {
        Notiflix.Loading.remove();
        Notiflix.Notify.success('Correo enviado correctamente', {
          success: {
            textColor: '#FFFFFF',
            notiflixIconColor: '#f24405',
          }
        });
        setTimeout(() => {
          window.location.reload(); 
        }, 2000);
      },
      error: (err) => {
        Notiflix.Loading.remove();
        Notiflix.Notify.failure('Hubo un problema al enviar el correo. Intenta nuevamente.', {
          failure: {
            textColor: '#FFFFFF',
            notiflixIconColor: '#f24405',
          }
        });
        console.error(err);
      }
    });
  }
}
