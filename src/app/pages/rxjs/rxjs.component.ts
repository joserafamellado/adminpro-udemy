import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() { 

     // tslint:disable-next-line: align
    this.subscription = this.regresaObservable()
     .subscribe(
        numero => console.log('Subs ', numero),
        error => console.log('Error en obs', error),
        () => console.log('El observador termino')
     );

  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log('se cierra pagina');
    this.subscription.unsubscribe();
    
  }

  regresaObservable(): Observable<any> {

    return new Observable( (observer: Subscriber<any> ) => {

      let contador = 0;

      const intervalo = setInterval( () => {

          contador += 1;

          
          const salida = {
            valor: contador
          };

          observer.next(salida);


/*           if (contador === 3){
            clearInterval(intervalo);
            observer.complete();
          }
 */
/*           if (contador === 2){
             clearInterval(intervalo); 
            observer.error( 'Auxilio!' );
          }  */

       } , 1000);

    }).pipe(
      map( resp =>  resp.valor ),
      filter( ( valor , index ) => {
        if ( (valor % 2 ) === 1 ) {
          // impar
          return true;
        } else {
          // par
          return false;
        }
      } )
    );

  }

}
