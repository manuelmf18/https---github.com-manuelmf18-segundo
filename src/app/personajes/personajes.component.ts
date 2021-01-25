import { Component, OnInit } from '@angular/core';
import { PAjaxService } from '../p-ajax.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public personaje: Array<any>;
  public datos: any;
  public datosPlaneta: Object = null;

  constructor(private peti: PAjaxService) {
    this.personaje=[];
    this.datos= null;
   }

  ngOnInit(): void {
      this.peti.pedirPersonajes().subscribe(
        datos => {
          console.log("datos: ", datos);
          this.asignarDatos(datos);
        },
        error => console.log("Error: ", error));
    } 

  asignarDatos(datos: object){
    this.datos= datos;
    console.log(this.datos);
    this.personaje = this.datos.results;
  }
  
  pedirSiguiente() {
    this.peti.petiADir(this.datos.next).subscribe(
      datos => {
        console.log("datos: ", datos.next);
        this.asignarDatos(datos);
      });
    }

  pedirAnterior() {
    this.peti.petiADir(this.datos.previous).subscribe(
      datos => {
        console.log("datos: ", datos.previous);
        this.asignarDatos(datos);
      });
  }

  mostarDatosPlanetas(dirPlaneta: string, evento){
  evento.preventdefault();

    this.peti.petiADir(dirPlaneta).subscribe(
      datos => {
        this.asignarDatos(datos);
      });
  }
}