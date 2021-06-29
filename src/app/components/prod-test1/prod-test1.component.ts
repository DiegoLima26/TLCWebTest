import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'appProdtest1',
  templateUrl: './prod-test1.component.html',
  styleUrls: ['./prod-test1.component.css']
})
export class ProdTest1Component implements OnInit {

  constructor() { }

  public ngOnInit()
  {
    $(function(){
      var botonProductos = $('.categoriaProductos');
          
      $('.contProdNav-N .categoriaProductos[category="all"]').addClass('categoriaProductosSeleccion');
      
      botonProductos.on('click',function() {
        var itemProducto = $('.posContProd');
        var tipoProducto = $(this).attr('category');                         // Obtener tipo de producto en variable
        //console.log(tipoProducto);                                         // Mostrar producto por consola
        botonProductos.removeClass('categoriaProductosSeleccion');           // Remover clase de seleccion
		    $(this).addClass('categoriaProductosSeleccion');                     // Colocar clase de seleccion al producto seleccionado
        $('.posContProd').css('transform', 'scale(0)');                           // Minimizar a 0 todos los productos

		    function ocultaProductos()                                           // Funcion que oculta todos los productos
			  {
          itemProducto.hide();
		    } setTimeout(ocultaProductos,400);

        function mostrarProductos()                                          // Funcion que muestra los elementos de la categoria seleccionada
        {
          $('.posContProd[category="'+tipoProducto+'"]').show();                        // Mostramos Productos
          $('.posContProd[category="'+tipoProducto+'"]').css('transform', 'scale(1)');  // Escalamos a 1 los productos
        } setTimeout(mostrarProductos,400);

        ocultaProductos();
        mostrarProductos();

        $('.categoriaProductos[category="all"]').on('click',function(){
          function mostrarTodo(){
            itemProducto.show();
            itemProducto.css('transform', 'scale(1)');
          } setTimeout(mostrarTodo,400);
        });

      });
    });
  }

}
