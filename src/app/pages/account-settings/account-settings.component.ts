
import { Component, OnInit, Inject } from '@angular/core';

import { SettingsService } from './../../services/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [

  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarColor( tema: string, link: any){

    console.log(link);
    this.aplicarCheck( link );
    this._ajustes.aplicarTema( tema );

  }

  aplicarCheck( link: any){

    let selectores: any = document.getElementsByClassName('selector');

    for( let ref of selectores ){
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck(){
    let tema = this._ajustes.ajustes.tema ;
    let selectores: any = document.getElementsByClassName('selector');
    for( let ref of selectores ){
      if ( tema === ref.getAttribute('data-theme') ) {
        ref.classList.add('working');
        break;
      }
    }

  }

}
