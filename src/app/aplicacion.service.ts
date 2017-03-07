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
  
  constructor() { }

}