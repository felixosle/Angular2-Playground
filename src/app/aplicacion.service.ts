import { Injectable } from '@angular/core';
import {Aplicacion} from './aplicacion';
import {APLICACIONES} from './mock-aplicaciones';

@Injectable()
export class AplicacionService {
    getAplicaciones():Aplicacion[]{
      return APLICACIONES;
    }
  constructor() { }

}