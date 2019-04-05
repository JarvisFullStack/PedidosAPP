import { Pedido_Cliente } from './../../models/pedido_cliente';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistroPedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro-pedido',
  templateUrl: 'registro-pedido.html',
})
export class RegistroPedidoPage {
  Pedido: Pedido_Cliente;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPedidoPage');
  }

}
