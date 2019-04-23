import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Negocio } from '../../models/negocio.model';

/*
  Generated class for the ServicesNegocioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesNegocioProvider {

  constructor(public http: HttpClient) {
    
  }

  public obtenerNegocios(): Observable<Negocio[]> {
      
      return this.http.get<Negocio[]>('http://localhost:3000/api/negocios/', {responseType: 'json'});
  }

}
