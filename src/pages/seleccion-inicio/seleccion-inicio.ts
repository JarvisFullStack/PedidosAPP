import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeleccionInicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seleccion-inicio',
  templateUrl: 'seleccion-inicio.html',
})
export class SeleccionInicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeleccionInicioPage');
  }

  seleccion_inicio(tipo: String) {
    switch(tipo) {
      case 'empresa' :
        console.log("Vamos al login de la empresas!");
      break
      case 'cliente':
        console.log("Vamos al login de clientes");
      break;
    }
  }

}
