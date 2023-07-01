import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ProgramaI } from 'src/app/modelos/programa.interface';
import { ServiceService } from 'src/app/servicios/service.service';

@Component({
  selector: 'app-app-programas',
  templateUrl: './app-programas.component.html',
  styleUrls: ['./app-programas.component.scss']
})


export class AppProgramasComponent implements OnInit {

  ancho = 300;
  anchov = this.ancho - (this.ancho * 0.07);
  altura = this.ancho * 0.67;
  ruta = "https://www.ranchoalegrebc.com/delorec/recursos/videos/";

  ngOnInit(): void {
    this.ajustaVideo(window.innerWidth, window.innerHeight);    
    // Para que el filtro de la tabla lo haga por el mensaje y no por todas las columnas
    this.dataSource.filterPredicate = function (record, filter) {
      return record.msg.indexOf(filter)!=-1;
    }    
  }


  videos: ProgramaI[] = [];

  constructor(private rdlsrv: ServiceService) {
    this.vePorDatos("rabcprog");
  }

  vePorDatos(miMetodo: string){
    this.rdlsrv.dameDatos(miMetodo).subscribe(res => 
      {
        this.videos = res.Data;

        for(var x = 0; x < this.videos.length; x++){
          this.videos[x].id = x.toString();
        }
        this.dataToDisplay = [...this.videos];
        this.dataSource.data = this.dataToDisplay;

      }
    );      
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.ajustaVideo(window.innerWidth, window.innerHeight)
  }

  ajustaVideo(nAncho: number, nAlto: number): void {
    if(nAncho > 1400) {
      this.ancho = 410;
    }else{
      if(nAncho > 1200) {
        this.ancho = 355;
      }else{
        if(nAncho > 991) {
          this.ancho = 295;
        }else{
          if(nAncho > 767) {
            this.ancho = 698;              
          }else{
            if(nAncho > 557) {
              this.ancho = 516;              
            }else{
              if(nAncho < 376) {
                this.ancho = nAncho * .93;       
              }else{
                this.ancho = nAncho * .90;
              }
            }
          }  

        }
      }
    }
    this.altura = this.ancho * 0.6;
    this.anchov = this.ancho - (this.ancho * 0.07);
  }


// Tablas
  pantalla: ProgramaI = { id: "", tipo: "", msg: "", des:"", src: ""};
  color: string = "rgb(110, 36, 24)";
  colorl: string = "rgb(240, 240, 240)";
  color2: string = "rgb(240, 240, 240)";
  pagSize: number[] = [5, 10, 20];
  misColumnas: string[] = ['msg'];

  dataToDisplay = [...this.videos];
  dataSource = new MatTableDataSource<ProgramaI>(this.dataToDisplay);

  @ViewChild(MatTable) table!: MatTable<ProgramaI>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  onRowClicked(row: any) {
    this.pantalla = row;
  }

  rdlFiltro: string = "";
  applyFilter(event: Event) {
    var filterValue = (event.target as HTMLInputElement).value;
    filterValue = filterValue.trim();
    this.dataSource.filter = filterValue;
  }

  cleanfilter() {
    this.dataSource.filter = "";
  }


}
