import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorageServiceModule } from 'angular-webstorage-service';

import { ModalModule } from 'ngx-bootstrap/modal';

import { LoginComponent } from './auth/login/login.component';

import { NavbarComponent } from './system/navbar/navbar.component';
import { HomeComponent } from './system/home/home.component';
import { NuevaSolicitudComponent } from './system/nueva-solicitud/nueva-solicitud.component';
import { MisSolicitudesComponent } from './system/mis-solicitudes/mis-solicitudes.component';
import { ReasignacionesComponent } from './system/reasignaciones/reasignaciones.component';
import { ConfiguracionesComponent } from './system/configuraciones/configuraciones.component';
import { NotificacionesComponent } from './system/notificaciones/notificaciones.component';
import { ReportesComponent } from './system/reportes/reportes.component';

import { DatosPersonalesComponent } from './activities/datos-personales/datos-personales.component';
import { DomicilioComponent } from './activities/domicilio/domicilio.component';
import { HistorialCrediticioComponent } from './activities/historial-crediticio/historial-crediticio.component';
import { IngresosComponent } from './activities/ingresos/ingresos.component';
import { OfertasComponent } from './activities/ofertas/ofertas.component';
import { DatosAdicionalesComponent } from './activities/datos-adicionales/datos-adicionales.component';
import { CargaDocumentosComponent } from './activities/carga-documentos/carga-documentos.component';
import { NavbarActivitiesComponent } from './system/navbar-activities/navbar-activities.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    NuevaSolicitudComponent,
    MisSolicitudesComponent,
    ReasignacionesComponent,
    ConfiguracionesComponent,
    NotificacionesComponent,
    ReportesComponent,
    DatosPersonalesComponent,
    DomicilioComponent,
    HistorialCrediticioComponent,
    IngresosComponent,
    OfertasComponent,
    DatosAdicionalesComponent,
    CargaDocumentosComponent,
    NavbarActivitiesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StorageServiceModule,

    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
