import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContenidoDialogoComponent } from '../contenido-dialogo/contenido-dialogo.component';

@Component({
  selector: 'pag-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit 
{

  constructor(public dialog: MatDialog) {}
  AbrirDialogo1() 
  {
    const dialogRef = this.dialog.open(ContenidoDialogoComponent);
    dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }
  ngOnInit(): void {}
}
