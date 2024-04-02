import { Component } from '@angular/core';
import { StyleService } from '../../services/style.service';
import { StyleDirective } from '../../directives/style.directive';
import { LanguageService } from '../../services/language.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [StyleDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [
    trigger('languageChange', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate(800, style({ opacity: 1 }))
      ]),
    ])
  ]
})
export class ContactComponent {
  colorContact: string = ''
  language:string = ''
  constructor(private _styleService: StyleService, private languageService: LanguageService) { }

  ngOnInit() {
    this._styleService.alertForChangeColores.subscribe(colorPaletteArray => {
      this.colorContact = colorPaletteArray[2]
    })


    this.languageService.alertForChangeLanguage.subscribe(language =>{
      console.log(language)
      this.language = language
    })


  }

}
