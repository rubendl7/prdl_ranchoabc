import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { EnlaceI } from '../modelos/enlace.interface';
import { MensajeI } from '../modelos/mensaje.interface';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  cRutSrv="https://www.ranchoalegrebc.com/rdlactiv/servicios/";
  cTkn = "eyJ0eXAiOiJK0V1QiRCJhbGcJOMJIUzIrNiJ9.eyJleHAUOjE2CDg2MTU2ODAsImF1ZCI6IjVjYjExNDAzMGUyMTdjZmI2ZDY1MzQxOTczODI2ZmM1MzY4YmY3M2EiLCJkYXRhIjp7ImlkIjoxLCJuYW1lIjoicnViZW5jaXRvIn19.l_bCB5C5rIaoxLar3VnUIuAhjKYNWrHvRDSk9";
  Notifica!: MensajeI;

  httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Headers' : 'Content-Type, Access-Control-Allow-Headers ',
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + this.cTkn
      })
  };

  constructor(private http: HttpClient) { }

  salvaMensaje(nuevoMensaje: EnlaceI):Observable<any>  {
    this.Notifica = { req: 'mndanoti', pnom: nuevoMensaje.nombre, peml: nuevoMensaje.correo, ptxt: nuevoMensaje.mensaje};
    const body = JSON.stringify(this.Notifica);
    console.log(nuevoMensaje + " = " + body);
    return this.http.post<MensajeI>(this.cRutSrv, body, this.httpOptions );  
  }

  dameDatos(miCve: string):Observable<any>  {
    this.Notifica = { req: miCve , pnom: "", peml: "", ptxt: ""};
    const body = JSON.stringify(this.Notifica);
    return this.http.post<any>(this.cRutSrv, body, this.httpOptions );  
  }


}
