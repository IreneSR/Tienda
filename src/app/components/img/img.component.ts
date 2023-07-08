//Importaciones de interfaces u objetos
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  @Input() img: string = "Encontre la imagen :o";
  // @Input() dice_hijo: string = "Si";
  @Output() loaded = new EventEmitter<string>();

  /**
   * Se corre antes del render
   * No se deben de correr Funciones asincronas
   *  *Fetch X
   *  *Llamada a una API X
   * El constructor solo se corre una vez
   */
  constructor() {
    console.log("Construccion ->", this.img);
  }

  //Corre antes del render
  //Aqui si se pueden hacer llamdas a fecth o APIs
  //Se corre una sola vez por componente (cada componente es diferente en las direcciones de memoria en las que se aloja)
  // counter: number = 0;

  // controlador_contador = 0;

  // ngOnInit(): void {
  //   //Constructor par aparte del angular
  //   console.log("ngOnInit", "valor img", this.img)
  //   this.controlador_contador = window.setInterval(() => {
  //     console.log("Contador corriendo")
  //     this.counter += 1;
  //   }, 1000)
  // }

  //Corre antes y despues del render (antes de comenzar y despues)
  //Este esta al pendiente si cambia cualquier valor en los inputs
  // ngOnChanges() {
  //   console.log("ngOnChanges", "valor img", this.img)
  // }

  //Manejar los valores de los hijos
  //Los hijos(Tags, Input, Imagenes, divs, span, ancor)
  //Corre despues del render
  // ngAfterViewInit(): void {
  //   console.log("ngAfterViewInit", "valor img", this.img)
  // }

  /* 
  -Cuando el componente se destruye y muere
  -Advertencia: muchas cosas cuando el componente muere, no muere
   *Conexiones a la base de datos
   *hilos sueltos 
   *llamadas asincronas
  */
  // ngOnDestroy(): void {
  //   console.log("ngOnDestroy", "valor img", this.img)
  //   window.clearInterval(this.controlador_contador);
  // }

  imgError() {
    this.img = "No cargó la imagen";
  }

  imgLoad() {
    console.log("Imagen reconocida :) y cargada con exito ;)");
    this.loaded.emit(this.img); //Para emitirlo al padre
  }
}