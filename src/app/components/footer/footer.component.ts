import { Component } from '@angular/core';
import { StyleDirective } from '../../directives/style.directive';
import { StyleService } from '../../services/style.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [StyleDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private _styleService: StyleService, private languageService:LanguageService) { }
  language: string = 'us'

  colorFooter: string = ''
  
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
