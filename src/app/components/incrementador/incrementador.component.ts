import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgreso') txtProgreso: ElementRef ;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log('leyenda ',this.leyenda);
  }

  ngOnInit(): void {
    console.log('leyenda ',this.leyenda);
  }

  onChanges( newValue: number){{
   
/*     let elemHTML: any = document.getElementsByName('progreso')[0]; */

    console.log(this.txtProgreso);

    this.progreso = newValue >= 100 ? 100 : newValue <= 0 ? 0 : newValue ;
  
    this.txtProgreso.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);

    this.txtProgreso.nativeElement.focus();
  }}

  cambiarValor(valor: number){

    if ( this.progreso + valor >= 0 && this.progreso + valor <= 100 ) { 
      this.progreso += valor;
      this.cambioValor.emit( this.progreso );
    }

  }

}
