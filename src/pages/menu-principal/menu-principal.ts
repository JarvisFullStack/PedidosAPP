import { RegistroProductoPage } from './../registro-producto/registro-producto';
import { RegistroPedidoPage } from './../registro-pedido/registro-pedido';
import { RegistroNegocioPage } from './../registro-negocio/registro-negocio';
import { RegistroClientePage } from './../registro-cliente/registro-cliente';
import { ListadoNegociosPage } from './../listado-negocios/listado-negocios';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the MenuPrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-principal',
  templateUrl: 'menu-principal.html',
})
export class MenuPrincipalPage {
  rootPage: any;
  tipo: String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = HomePage;
    this.tipo = 'cliente';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPrincipalPage');
  }

  abrirPagina(pagina: string) {
    switch(pagina) {
      case 'negocios':
        this.navCtrl.push(ListadoNegociosPage);
      break;
      case 'registro-cliente':
        this.navCtrl.push(RegistroClientePage);
      break;
      case 'registro-negocio':
        this.navCtrl.push(RegistroNegocioPage);
      break;
      case 'registro-pedido':
        this.navCtrl.push(RegistroPedidoPage);
      break;
      case 'registro-producto':
        this.navCtrl.push(RegistroProductoPage);
      break;
    }
  }

}
