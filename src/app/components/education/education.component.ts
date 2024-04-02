import { Component } from '@angular/core';
import { StyleDirective } from '../../directives/style.directive';
import { StyleService } from '../../services/style.service';
import { LanguageService } from '../../services/language.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [StyleDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
  animations: [
    trigger('languageChange', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate(800, style({ opacity: 1 }))
      ]),
    ])
  ]
})
export class EducationComponent {

  constructor(private _styleService: StyleService, private languageService:LanguageService) { }
  colorFooter: string = ''
  language: string = 'us'

  ngOnInit() {
    this._styleService.alertForChangeColores.subscribe(colorPaletteArray => {
      this.colorFooter = colorPaletteArray[4]
    })


    this.languageService.alertForChangeLanguage.subscribe(language =>{
      console.log(language)
      this.language = language
    })

  }
}
