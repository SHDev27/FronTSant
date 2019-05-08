import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
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

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  { path: 'home', component: HomeComponent },
  { path: 'nuevaSolicitud', component: NuevaSolicitudComponent },
  { path: 'misSolicitudes', component: MisSolicitudesComponent },
  { path: 'reasignaciones', component: ReasignacionesComponent },
  { path: 'configuraciones', component: ConfiguracionesComponent },
  { path: 'notificaciones', component: NotificacionesComponent },
  { path: 'reportes', component: ReportesComponent },

  { path: 'datos-personales', component: DatosPersonalesComponent },
  { path: 'domicilio', component: DomicilioComponent },
  { path: 'historial-crediticio', component: HistorialCrediticioComponent },
  { path: 'ingresos', component: IngresosComponent },
  { path: 'ofertas', component: OfertasComponent },
  { path: 'datos-adicionales', component: DatosAdicionalesComponent },
  { path: 'carga-documentos', component: CargaDocumentosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
