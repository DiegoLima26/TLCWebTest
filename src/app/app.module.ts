import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppComponent } from './app.component';
import { ComponenteUno } from './components/componente-uno/componente-uno.component';
import { ProductosComponent } from './components/productos/productos.component';
import { TabNavegacionComponent } from './components/tab-navegacion/tab-navegacion.component';
import { ContenidoDialogoComponent } from './components/contenido-dialogo/contenido-dialogo.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { MenuLateralPComponent } from './components/menu-lateral-p/menu-lateral-p.component';
import { BarNavegacionComponent } from './components/bar-navegacion/bar-navegacion.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {RouterModule, Routes} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ProdTest1Component } from './components/prod-test1/prod-test1.component';
import { DialSingInComponent } from './components/dial-sing-in/dial-sing-in.component';

const rutas: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'pag-inicio'
  },
  {
    path:'bar-navegacion',
    component:BarNavegacionComponent
  },
  {
    path:'appProdtest1',
    component:ProdTest1Component
  },
  {
    path:'pag-inicio',
    component:InicioComponent
  },
  {
    path:'pag-servicios',
    component:ServiciosComponent
  },
  {
    path:'pag-contactos',
    component:ContactosComponent
  },
  {
    path:'pag-acerca-de',
    component:AcercaDeComponent
  },
  {
    path:'menu-lateral-p',
    component:MenuLateralPComponent,
    children:[
      {
        path:'',
        pathMatch:'prefix',
        redirectTo:'pag-productos'
      },
      {
        path:'pag-productos',
        component:ProductosComponent
      },
      {
        path:'componente-uno',
        component:ComponenteUno
      }
    ]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ComponenteUno,
    ProductosComponent,
    BarNavegacionComponent,
    TabNavegacionComponent,
    ContenidoDialogoComponent,
    InicioComponent,
    ServiciosComponent,
    ContactosComponent,
    AcercaDeComponent,
    MenuLateralPComponent,
    ProdTest1Component,
    DialSingInComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    GoogleMapsModule,
    RouterModule.forRoot(rutas)
  ],
  entryComponents: [
    ContenidoDialogoComponent,
    DialSingInComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
