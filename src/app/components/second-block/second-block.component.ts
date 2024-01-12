import { Component } from '@angular/core';
import { StyleService } from '../../services/style.service';
import { StyleDirective } from '../../directives/style.directive';

@Component({
  selector: 'app-second-block',
  standalone: true,
  imports: [StyleDirective],
  templateUrl: './second-block.component.html',
  styleUrl: './second-block.component.css'
})
export class SecondBlockComponent {
  colorSecondBlock: string = ''

  constructor(private _styleService: StyleService) { }

  ngOnInit() {
    this._styleService.alertForChangeColores.subscribe(colorPaletteArray => {
      this.colorSecondBlock = colorPaletteArray[3]
      console.log(colorPaletteArray)
    })
  }
  
}
