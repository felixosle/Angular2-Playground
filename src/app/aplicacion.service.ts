import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import {Aplicacion} from './aplicacion';
import {APLICACIONES} from './mock-aplicaciones';


@Injectable()
export class AplicacionService {
  constructor() { }
  
  private aplicacionSeleccionadaBehSubject=new BehaviorSubject<number>(1);
  public aplicacionSeleccionadaObs=this.aplicacionSeleccionadaBehSubject.asObservable();

  setAplicacion(number){
    this.aplicacionSeleccionadaBehSubject.next(2);
  }

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
  


}