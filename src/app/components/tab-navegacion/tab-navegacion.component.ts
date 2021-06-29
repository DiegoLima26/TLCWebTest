import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContenidoDialogoComponent } from '../contenido-dialogo/contenido-dialogo.component';

@Component({
  selector: 'tab-navegacion',
  templateUrl: './tab-navegacion.component.html',
  styleUrls: ['./tab-navegacion.component.css']
})
export class TabNavegacionComponent implements OnInit 
{
  constructor(public dialog: MatDialog) { }
  AbrirDialogo() {
    const dialogRef = this.dialog.open(ContenidoDialogoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
  }
}
