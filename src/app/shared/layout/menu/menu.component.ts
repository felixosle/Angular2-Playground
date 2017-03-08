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
  
  getAplicaciones(): void{
    this.aplicacionService.getAplicaciones()
        .subscribe(aplicaciones => this.aplicaciones = aplicaciones);
  }
  
  aplicacionSeleccionada: Aplicacion=this.aplicacionService.getAplicacion(1);

  ngOnInit() { 
    this.getAplicaciones();
  }

}
