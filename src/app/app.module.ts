import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//Paginas
import {RegistroClientePage, RegistroNegocioPage, RegistroPedidoPage, RegistroProductoPage, 
ListadoClientesPage, ListadoNegociosPage, ListadoPedidosPage, ListadoProductosPage, SeleccionInicioPage, 
LoginPage, MenuPrincipalPage} from '../pages/index.pages';
import { ServicesNegocioProvider } from '../providers/services-negocio/services-negocio';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage, RegistroClientePage, RegistroNegocioPage, RegistroPedidoPage, RegistroProductoPage, 
    ListadoClientesPage, ListadoNegociosPage, ListadoPedidosPage, ListadoProductosPage, SeleccionInicioPage, 
    LoginPage, MenuPrincipalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, RegistroClientePage, RegistroNegocioPage, RegistroPedidoPage, RegistroProductoPage, 
    ListadoClientesPage, ListadoNegociosPage, ListadoPedidosPage, ListadoProductosPage, SeleccionInicioPage, 
    LoginPage, MenuPrincipalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesNegocioProvider
  ]
})
export class AppModule {}
