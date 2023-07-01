import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './compartido/componentes/encabezado/encabezado.component';
import { PiedepagComponent } from './compartido/componentes/piedepag/piedepag.component';
import { AppInicioComponent } from './paginas/app-inicio/app-inicio.component';
import { AppRanchoaComponent } from './paginas/app-ranchoa/app-ranchoa.component';
import { AppProgramasComponent } from './paginas/app-programas/app-programas.component';
import { AppPodcastComponent } from './paginas/app-podcast/app-podcast.component';
import { AppGaleriaComponent } from './paginas/app-galeria/app-galeria.component';
//import { YouTubePlayerModule } from '@angular/youtube-player';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomMatPaginatorIntl } from './servicios/configura.tablas';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PiedepagComponent,
    AppInicioComponent,
    AppRanchoaComponent,
    AppPodcastComponent,
    AppGaleriaComponent,
    AppProgramasComponent
  ],
  imports: [
    BrowserModule, 
//    YouTubePlayerModule, 
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [{
    provide: MatPaginatorIntl, 
    useClass: CustomMatPaginatorIntl
  }],
  bootstrap: [AppComponent]
})


export class AppModule { }
