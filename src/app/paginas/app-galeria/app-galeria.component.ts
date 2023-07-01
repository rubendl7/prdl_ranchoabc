import { Component } from '@angular/core';

@Component({
  selector: 'app-app-galeria',
  templateUrl: './app-galeria.component.html',
  styleUrls: ['./app-galeria.component.scss']
})
export class AppGaleriaComponent {

  ruta = "https://www.ranchoalegrebc.com/delorec/recursos/galeria/";
  ruta2 = "https://www.ranchoalegrebc.com/delorec/recursos/chicas/";

  miFoto = '769A7798 baja organic.JPG';

  oModal( id: any ) { 
    this.miFoto = id; 
  }

  fotos = [
    { src:   '769A7798 baja organic.jpg', thumb: '769A7798 baja organic.jpg' },
    { src:   '769A7814.jpg',              thumb: '769A7814.jpg' },
    { src:   '769A7822.jpg',              thumb: '769A7822.jpg' },
    { src:   '769A7825.jpg',              thumb: '769A7825.jpg' },
    { src:   '769A7827.jpg',              thumb: '769A7827.jpg' },
    { src:   '769A7843 baja organic.jpg', thumb: '769A7843 baja organic.jpg' },
    { src:   '769A7889.jpg',              thumb: '769A7889.jpg' },
    { src:   '769A7890 icasa.jpg',        thumb: '769A7890 icasa.jpg' },
    { src:   '769A7992 roganto.jpg',      thumb: '769A7992 roganto.jpg' },
    { src:   '769A8021.jpg',              thumb: '769A8021.jpg' },
    { src:   '769A8034.jpg',              thumb: '769A8034.jpg' },
    { src:   '769A8117.jpg',              thumb: '769A8117.jpg' },
    { src:   '769A8957.jpg',              thumb: '769A8957.jpg' },
    { src:   '769A8958.jpg',              thumb: '769A8958.jpg' },
    { src:   '769A8971.jpg',              thumb: '769A8971.jpg' },
    { src:   'rancho5.jpg',               thumb: 'rancho5.jpg' },
    { src:   'ranchoalegre1.jpg',         thumb: 'ranchoalegre1.jpg' },
    { src:   'ranchoalegre6.jpg',         thumb: 'ranchoalegre6.jpg' },
  ];


}













