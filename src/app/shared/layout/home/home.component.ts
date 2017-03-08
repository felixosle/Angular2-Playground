import { Component, OnInit } from '@angular/core';
import {AplicacionService} from '../../../aplicacion.service';
import {Aplicacion} from '../../../aplicacion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AplicacionService]
})
export class HomeComponent implements OnInit {

  constructor(private aplicacionService: AplicacionService) { }
  
  aplicaciones: Aplicacion[];

  getAplicaciones(): void{
    this.aplicacionService.getAplicaciones()
        .subscribe(aplicaciones => this.aplicaciones = aplicaciones);
  }

  ngOnInit() { 
    this.getAplicaciones();
    
  }

}
