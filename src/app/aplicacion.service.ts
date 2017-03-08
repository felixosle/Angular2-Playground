import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs';
import {Aplicacion} from './aplicacion';
import {APLICACIONES} from './mock-aplicaciones';

@Injectable()
export class AplicacionService {
    
  getAplicaciones(){
      return Observable.create(observer => {
      observer.next(APLICACIONES);
    })
  }

  getAplicacion(id:number){
    let aplicacionSeleccionada: Aplicacion= { id: 1, nombre: 'SICAS', version:'214_185_198', icono:'sicas', menu:['opcion1', 'opcion2', 'opcion3'] };
    return aplicacionSeleccionada;
    /*
      Observable.create(observer=>{
      observer.next(APLICACIONES.find((aplicacion)=>aplicacion.id == id));
    })
    */
  }
  
  constructor() { }

}