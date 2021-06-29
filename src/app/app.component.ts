import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import * as $ from 'jquery';
//import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private rutas:Router) { }
  title = 'WEB TLC';

  mostrarPagina(url:string)
  {
    this.rutas.navigate([url]);
  }
  
  // ngOnInit clase necesaria para arrancar java script desde el comienzo
  public ngOnInit()
  {
    $(function(){
      // -----------------  Variables para el manejo del Baner deslizable ---------------------- // 
      
      var btnIZ = $('.botonIz'),                // Variable que maneja el boton a la Izquierda del baner desplegable 
      btnDer = $('.botonDer'),                  // Variable que maneja el boton a la Derecha del baner desplegable 
      slider = $('.banerLateralListaU');        // Variable que maneja el contenedor de imagenes del baner
      var contTiempo = setInterval(function(){ MovDer(); }, 4000);

      // -----------------  Variables para el manejo del Menu ---------------------- //

      var botonProductos = $('.btnProductos'),             // Variable para desplegar el menu productos
          mostrarMenuProductos = $('.contRejilla'),        // Variable contiene el div menu productos
          seccionesMenuResp = document.querySelectorAll('.contBtnNavegacion .linkMenu li a'),   
          subCateSelec = $('.subCatGrid .subCatGridItem .linkSubCategoria'),            // Variable controla las categorias del menu productos
          enlacesCategorias = document.querySelectorAll('.contRejilla .catGrid a'),     // variable con los enlaces de las categorias 
          subCatEnlacesProd = document.querySelectorAll('.contRejilla .subCatGrid .subCatGridItem'),
          flechaCat = document.querySelectorAll('.contRejilla .catGrid .linkCatProd .huella1'),
          btnResponsive = $('.contMenuBtnResp .btnMenuResp'),
          mostrarBtnResp = $('.menuVertical .contBtnNavegacion'),
          btnBackMenCatResp = $('.contRejilla .btnGridBack'),                     // Variable con el boton regreso de los productos 
          btnBackSubMenuCatResp = $('.contRejilla .subCatGrid .subCatGridItem .btnGridBackSub'),     // Variable para el boton regreso de los subProductos
          btnEnlaceCategoria = $('.contRejilla .catGrid a'),
          subCatEnlacesProdR = $('.contRejilla .subCatGrid .subCatGridItem'),
          subCatLinkSubProd = $('.contRejilla .subCatGrid .subCatGridItem .linkSubCategoria a'),     // variable con los links de los subproductos
          botonLogIn = $('.contBtnNavegacion .inicioSesion .btnMenuLogIn'),           // variable para abrir el login
          contenidoLogIn = $('.menuVertical .contenedorLogIn'),                     // variable pantalla login
          botonLogInResp = $('.menuVertical .contMenuBtnResp .inicioSesionResp .btnMenuLogInResp'); // varible para abrir el login resp
      // ------------------ Inicio de Funciones Generales y particulares -------------------- //

      function pantallaMovil()                             // funcion para saber si estamos en pantallas moviles
      {
        if(window.innerWidth <= 767)
        {
          return true;
        }
        else
        {
          return false;
        }
      }

      if(!pantallaMovil())
      {
        $('.contRejilla .subCatGrid .subCatGridItem[catProdTienda="fibraOptica"]').addClass('subItemOn');     // al iniciar la aplicacion ya habilitamos la categoria fibra optica
        $('.contRejilla .catGrid .linkCatProd[catProdTienda="fibraOptica"] .huella1').addClass('flechaOn');   // al iniciar la aplicacion ya habilitamos la flecha de categoria fibra optica
      }

      

      //-------------------------------------- Seccion Equipos de Escritorio --------------------------------//

      // Seleccionar subElementos de las categorias del Menu //

      enlacesCategorias.forEach((elemento) => {
        if(!pantallaMovil())
        {
          elemento.addEventListener('mouseenter', (e) => {
            var tipoProducto = $(elemento).attr('catProdTienda'); 
            subCatEnlacesProd.forEach((catProdTienda) =>{
              var tiposubProducto = $(catProdTienda).attr('catProdTienda'); 
              $('.contRejilla .catGrid .linkCatProd[catProdTienda="'+tiposubProducto+'"] .huella1').removeClass('flechaOn');
              catProdTienda.classList.remove('subItemOn');
              if(tipoProducto == tiposubProducto)
              {
                catProdTienda.classList.add('subItemOn');
                $('.contRejilla .catGrid .linkCatProd[catProdTienda="'+tipoProducto+'"] .huella1').addClass('flechaOn'); 
              }
            });
          });
        }
      });

      botonProductos.on('click',function(){            // al hacer click en el boton de menu
        if(!pantallaMovil())
        {
          if(mostrarMenuProductos.hasClass('rejillaOn'))
          {
            subCatEnlacesProd.forEach((catProdTienda) =>{ 
              catProdTienda.classList.remove('subItemOn');
            });
            flechaCat.forEach((elemento) =>{
              elemento.classList.remove('flechaOn');
            });
            $('.contRejilla .subCatGrid .subCatGridItem[catProdTienda="fibraOptica"]').addClass('subItemOn');
            $('.contRejilla .catGrid .linkCatProd[catProdTienda="fibraOptica"] .huella1').addClass('flechaOn');
            mostrarMenuProductos.removeClass('rejillaOn');
          }
          else
          {
            mostrarMenuProductos.addClass('rejillaOn');
          }
        }
      });
      subCateSelec.on('click',function(){                       // Colapsar el menu al seleccionar un producto
        mostrarMenuProductos.removeClass('rejillaOn');
      });
      botonLogIn.on('click',function(){                         // mostrar el contenido de inicio de sesion
        if(contenidoLogIn.hasClass('mostrarLogIn'))
        {
          contenidoLogIn.removeClass('mostrarLogIn');
        }
        else
        {
          contenidoLogIn.addClass('mostrarLogIn');
        }
      });

      // funciones para manejar el baner lateral //
      
      $('.banerLateralListaU li:last').insertBefore('.banerLateralListaU li:first');
      slider.css('margin-left', '-'+100+'%');
  
      function MovDer()
      {
        slider.animate(
          {marginLeft:'-'+200+'%'},
          450,
          function()
          {
            $('.banerLateralListaU li:first').insertAfter('.banerLateralListaU li:last');
            slider.css('margin-left', '-'+100+'%');
          });
      }

      function MovIzq()
      {
        slider.animate(
          {marginLeft:0+'%'},
          450,
          function()
          {$('.banerLateralListaU li:last').insertBefore('.banerLateralListaU li:first');
          slider.css('margin-left', '-'+100+'%');
          }
        );
      }

      btnDer.on('click',function(){
        MovDer();
        clearInterval(contTiempo);
        contTiempo = setInterval(function(){
          MovDer();
        }, 4000);
      });

      btnIZ.on('click',function(){
        MovIzq();
        clearInterval(contTiempo);
        contTiempo = setInterval(function(){
          MovDer();
        }, 4000);
      });
      //-------------------------------------- Seccion Equipos Moviles --------------------------------//

      // funciones para manejar el menu //

      btnResponsive.on('click',function(){                        // Mostrar el Menu 
        if(mostrarBtnResp.hasClass('menuRespOn'))
        {
          if(subCatEnlacesProdR.hasClass('subItemOn'))
          {
            subCatEnlacesProdR.removeClass('subItemOn');
          }
          if(mostrarMenuProductos.hasClass('actResp'))
          {
            mostrarMenuProductos.removeClass('actResp');
          }
          mostrarBtnResp.removeClass('menuRespOn');
        }
        else
        {
          mostrarBtnResp.addClass('menuRespOn');
        }
      });  
      seccionesMenuResp.forEach((enlaces) =>{              // Quitar el contenido del menu al seleccionar una seccion
        enlaces.addEventListener('click', (aLink) => { 
          mostrarBtnResp.removeClass('menuRespOn');
        });
      });
      botonProductos.on('click',function(){                // Mostrar el menu al presionar el boton productos
        if(pantallaMovil())
        {
          mostrarMenuProductos.addClass('actResp');
        }
      });
      btnBackMenCatResp.on('click',function(){            // Boton para regresar desde el menu>productos al menu
        if(pantallaMovil())
        {
          mostrarMenuProductos.removeClass('actResp');
        }
      });
      btnEnlaceCategoria.on('click', function(){         // al presionar una categoria de productos va al menu de subProductos
        if(pantallaMovil())
        {
          var tipoProductoR = $(this).attr('catProdTienda');
          $('.contRejilla .subCatGrid .subCatGridItem[catProdTienda="'+tipoProductoR+'"]').addClass('subItemOn');
        }
      });
      subCatLinkSubProd.on('click',function(){              // al presionar un sub producto quito todo el menu
        if(pantallaMovil())
        {
          subCatEnlacesProdR.removeClass('subItemOn');     // quito menu subproductos
          mostrarMenuProductos.removeClass('actResp');     // quito menu productos
          mostrarBtnResp.removeClass('menuRespOn');        // quito menu
        }
      });
      btnBackSubMenuCatResp.on('click', function(){     // boton para regresar desde el Menu>Productos>SubProductos al Menu>Productos 
        subCatEnlacesProdR.removeClass('subItemOn');
      });


      botonLogInResp.on('click',function(){             // Mostrar el contenido de inicio de sesion  
        if(contenidoLogIn.hasClass('mostrarLogIn'))
        {
          contenidoLogIn.removeClass('mostrarLogIn');
        }
        else
        {
          contenidoLogIn.addClass('mostrarLogIn');
        }
      });

    });
  }
}
