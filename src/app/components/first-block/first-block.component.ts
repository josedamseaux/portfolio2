import { Component } from '@angular/core';
import { StyleService } from '../../services/style.service';
import { StyleDirective } from '../../directives/style.directive';

@Component({
  selector: 'app-first-block',
  standalone: true,
  imports: [StyleDirective],
  templateUrl: './first-block.component.html',
  styleUrl: './first-block.component.css'
})
export class FirstBlockComponent {
  colorFirstBlock: string = ''
  constructor(private _styleService: StyleService) { }

  ngOnInit() {
    this._styleService.alertForChangeColores.subscribe(colorPaletteArray => {
      this.colorFirstBlock = colorPaletteArray[2]
    })
  }
  
}
