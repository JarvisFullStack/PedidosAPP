import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListadoProductosPage } from './listado-productos';

@NgModule({
  declarations: [
    ListadoProductosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListadoProductosPage),
  ],
})
export class ListadoProductosPageModule {}
