import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor() { }

  private behaviorSubjectForStyle = new BehaviorSubject<string[]>([]);
  alertForChangeColores = this.behaviorSubjectForStyle.asObservable()


  arrayWithPalleteColors = [[],
    ['#9595b8', '#8585FF', '#00BCD4', '#f2f2ff', '#007bf6' ], 
    ['#8B4513', '#B8860B', '#D2B48C', '#BC8F8F', '#CD853F'], 
    ['#FFD049', '#7AE28F', '#FED2FF', '#FFA24F', '#FF8181'] ];

   palleteNumber = 0;

   selectColorPallete(){
    this.palleteNumber++
    if(this.palleteNumber == 4){
      this.palleteNumber = 1
    }
   }



   changeColor() {
    this.selectColorPallete();
    const elementosAleatorios: string[] = [];
    const copiaPaleta = [...this.arrayWithPalleteColors];
    let paletaSelected = copiaPaleta[this.palleteNumber].slice(); // Hacer una copia de la paleta original
  
    while (elementosAleatorios.length < 5 && paletaSelected.length > 0) {
      const indiceAleatorio = Math.floor(Math.random() * paletaSelected.length);
      const colorAleatorio = paletaSelected.splice(indiceAleatorio, 1)[0];
      elementosAleatorios.push(colorAleatorio);
    }
  
    this.behaviorSubjectForStyle.next(elementosAleatorios)

    return elementosAleatorios;
  }

  
}
