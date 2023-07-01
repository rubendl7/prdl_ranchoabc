import { Component } from '@angular/core';
import { PodCastI } from 'src/app/modelos/podcast.interface';
import { ServiceService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-app-podcast',
  templateUrl: './app-podcast.component.html',
  styleUrls: ['./app-podcast.component.scss']
})

export class AppPodcastComponent {
  
  Activo ="static-1";

  ruta = "https://www.ranchoalegrebc.com/delorec/recursos/audios/";

  podcast: Array<PodCastI> = [];

  constructor(private rdlsrv: ServiceService) {
    this.vePorDatos("rabcpodc");
  }

  vePorDatos(miMetodo: string){
    this.rdlsrv.dameDatos(miMetodo).subscribe(res => 
      {
        this.podcast = res.Data;
        if(this.podcast.length > 0){
          this.podcast[0].s = "show";
        }
      }
    );      
  }



}
