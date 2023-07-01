import { Component , HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  implements OnInit {
  title = 'RanchoAlegreBC';
  Celular = false;
  nAltura = 670;

  @HostListener('window:resize', ['$event'])
  ngOnInit(): void { 
    this.ajustaVideo(window.innerWidth, window.innerHeight); 
  }
  onWindowResize() { this.ajustaVideo(window.innerWidth, window.innerHeight); }

  ajustaVideo(nAncho: number, nAlto: number): void {
    if(nAncho < 576) {this.Celular = true;}else{this.Celular = false;}
    this.nAltura = nAlto;    
  }

}