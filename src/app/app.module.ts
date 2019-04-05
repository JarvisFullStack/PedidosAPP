import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//Paginas
import {RegistroClientePage, RegistroNegocioPage, RegistroPedidoPage, RegistroProductoPage, 
ListadoClientesPage, ListadoNegociosPage, ListadoPedidosPage, ListadoProductosPage} from '../pages/index.pages';

@NgModule({
  declarations: [
    MyApp,
    HomePage, RegistroClientePage, RegistroNegocioPage, RegistroPedidoPage, RegistroProductoPage, 
    ListadoClientesPage, ListadoNegociosPage, ListadoPedidosPage, ListadoProductosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, RegistroClientePage, RegistroNegocioPage, RegistroPedidoPage, RegistroProductoPage, 
    ListadoClientesPage, ListadoNegociosPage, ListadoPedidosPage, ListadoProductosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
