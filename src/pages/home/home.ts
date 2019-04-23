import { Negocio } from './../../models/negocio.model';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesNegocioProvider } from '../../providers/services-negocio/services-negocio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  listaNegocios: Negocio[];
  constructor(public navCtrl: NavController, private negocioProvider: ServicesNegocioProvider) {
    
  }

  ngOnInit() {
    this.negocioProvider.obtenerNegocios().subscribe(data => {
      this.listaNegocios = data;
      console.log(data);
    });

    console.log(this.listaNegocios);
  }

}
