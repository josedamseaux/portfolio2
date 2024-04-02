import { Component } from '@angular/core';
import { StyleService } from '../../services/style.service';
import { StyleDirective } from '../../directives/style.directive';
import { LanguageService } from '../../services/language.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [StyleDirective],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css',
  animations: [
    trigger('languageChange', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate(800, style({ opacity: 1 }))
      ]),
    ])
  ]
})
export class WorkExperienceComponent {
  colorSecondBlock: string = ''

  constructor(private _styleService: StyleService, private languageService: LanguageService) { }
  language: string = 'us'

  ngOnInit() {
    this._styleService.alertForChangeColores.subscribe(colorPaletteArray => {
      this.colorSecondBlock = colorPaletteArray[3]
      console.log(colorPaletteArray)
    })

    this.languageService.alertForChangeLanguage.subscribe(language =>{
      console.log(language)
      this.language = language
    })

  }

}
