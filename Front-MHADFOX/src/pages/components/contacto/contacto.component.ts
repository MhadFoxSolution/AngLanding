import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; 
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-contacto',
  imports: [MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  title = 'Envia Correo';
  datos:FormGroup;
 
  constructor(private httpClient:HttpClient){
    this.datos = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      asunto: new FormControl('', Validators.required),
      mensaje: new FormControl('', Validators.required)
    })
  }
  envioCorreo(){
    //Notiflix.Loading.dots('Enviando'); 
    Notiflix.Loading.hourglass('Enviando correo', {
      backgroundColor:'rgba(223,227,220,0.8)',messageColor:'#f24405',messageFontSize:'25px',svgColor:'#012E40',fontFamily: '',});
    let params =  {
      email:"mhad.fox.solution@gmail.com",
      asunto:this.datos.value.asunto,
      mensaje:"Correo de contacto: "+this.datos.value.email+"\n Mensaje del cliente: "+ this.datos.value.mensaje 
    }
  console.log(params)
  this.httpClient.post('https://mhadfoxsolution.com/envio',params).subscribe(resp=>{
  console.log(resp)
  Notiflix.Loading.remove();
  Notiflix.Notify.success('Correo enviado correctamente',{success: {
    background: '',
    textColor: '#FFFFFF',
    childClassName: 'notiflix-notify-success',
    notiflixIconColor: 'rgb(255, 255, 255)',
    fontAwesomeClassName: 'fas fa-check-circle',
    fontAwesomeIconColor: '#f24405',
    backOverlayColor: 'rgb(242,68,5)',
    }});
  setTimeout(() => {
    window.location.reload(); // 🔄 Recargar después de 2 segundos
  }, 2000);
  })
  }
  

}
