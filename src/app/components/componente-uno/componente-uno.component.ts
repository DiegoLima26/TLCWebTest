import { Component } from '@angular/core';

@Component({
    selector: 'componente-uno',
    templateUrl: './componente-uno.component.html'
})

export class ComponenteUno{
    public titulo: String;
    public mensaje: String;
    public fecha: Number;
    constructor (){
        this.titulo= "Ver las ventas de TLC";
        this.mensaje= "No se vendio nada";
        this.fecha=2021;
        console.log ("Cargado funciona LOG");
        console.log(this.titulo, this.mensaje, this.fecha);
    }    
}