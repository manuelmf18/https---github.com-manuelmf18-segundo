import { Component, OnInit } from '@angular/core';
import { PAjaxService } from '../p-ajax.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public personaje: Array<any>;

  constructor(private peti: PAjaxService) {
    this.personaje=[];
   }

  ngOnInit(): void {
      //quitar barrabaja al subscribe
      this.peti.pedirPersonajes().subscribe(
        datos => {
          console.log("datos: ", datos);
          this.personaje = datos.results;
          //this.opcionesProv.unshift({ CODIGO: -1, NOMBRE: "seleccionar provincia" });
          //this.opSelProv = datos[1];
        },
        error => console.log("Error: ", error));
    } 
  
  }

}
