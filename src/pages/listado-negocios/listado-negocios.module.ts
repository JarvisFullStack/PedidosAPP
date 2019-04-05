import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListadoNegociosPage } from './listado-negocios';

@NgModule({
  declarations: [
    ListadoNegociosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListadoNegociosPage),
  ],
})
export class ListadoNegociosPageModule {}
