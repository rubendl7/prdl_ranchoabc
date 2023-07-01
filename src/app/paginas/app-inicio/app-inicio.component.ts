import { Component } from '@angular/core';

@Component({
  selector: 'app-app-inicio',
  templateUrl: './app-inicio.component.html',
  styleUrls: ['./app-inicio.component.scss']
})
export class AppInicioComponent {

  ruta = "https://www.ranchoalegrebc.com/delorec/recursos/carrusel/";

  fotos = [
    { id: 0, act: "active", src: 'cFoto1.jpg' },
    { id: 1, act: "", src: 'cFoto2.jpg' },
    { id: 2, act: "", src: 'cFoto3.jpg' }  
  ];

}
