import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { StyleDirective } from '../../directives/style.directive';
import { StyleService } from '../../services/style.service';
import { LanguageService } from '../../services/language.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [StyleDirective, ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [
    trigger('languageChange', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate(800, style({ opacity: 1 }))
      ]), 
    ])
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private _styleService: StyleService, private languageService:LanguageService) {}

  colorHeader: string = ''
  language: string = 'us'
  
  ngOnInit() {
    this._styleService.alertForChangeColores.subscribe(colorPaletteArray => {
      this.colorHeader = colorPaletteArray[0]
    })

    this.languageService.alertForChangeLanguage.subscribe(language =>{
      console.log(language)
      this.language = language
    })

  }
  
}
