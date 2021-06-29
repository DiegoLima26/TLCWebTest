import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'bar-navegacion',
  templateUrl: './bar-navegacion.component.html',
  styleUrls: ['./bar-navegacion.component.css']
})
export class BarNavegacionComponent implements OnInit {

  constructor(private rutas:Router) { }

  ngOnInit(): void {
  }
  mostrarPagina(url:string)
  {
    this.rutas.navigate([url]);
  }
}
