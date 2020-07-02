import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl : 'assets/css/colors/default.css',
    tema : 'default'
  }

  constructor() {
    this.cargarAjustes();
   }

  guardarAjustes(){
    // console.log('Guardado en el localStorage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes(){

    if (localStorage.getItem('ajustes')) {

        this.ajustes = JSON.parse( localStorage.getItem('ajustes'));
        // console.log('Cargado del localStorage');


    } else {
       //  console.log('Usando valores por defecto');

    }
    this.aplicarTema(this.ajustes.tema);
  }

  aplicarTema( tema: string ){

    const url = `assets/css/colors/${tema}.css`;

    document.getElementById('tema').setAttribute('href', url);

    // this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.temaUrl = url ;
    this.ajustes.tema = tema ;
    this.guardarAjustes();
  }

}

interface Ajustes  {
  temaUrl: string;
  tema: string;
}
