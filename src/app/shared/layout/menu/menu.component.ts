import { Component, OnInit } from '@angular/core';
import {AplicacionService} from '../../../aplicacion.service';
import {Aplicacion} from '../../../aplicacion';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [AplicacionService]
})
export class MenuComponent implements OnInit {

  constructor(private aplicacionService: AplicacionService) { }
  
  aplicaciones: Aplicacion[];
  aplicacionSeleccionada: Aplicacion=this.aplicacionService.getAplicacion(1);
  aplicacionSeleccionadaBS= this.aplicacionService.aplicacionSeleccionadaBS;

  getAplicaciones(): void{
    this.aplicacionService.getAplicaciones()
        .subscribe(aplicaciones => this.aplicaciones = aplicaciones);
  }
  
   ngOnInit() { 
    this.getAplicaciones();
  }

}
