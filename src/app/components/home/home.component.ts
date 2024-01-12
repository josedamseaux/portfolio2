import { Component, OnInit } from '@angular/core';
import { FirstBlockComponent } from '../first-block/first-block.component';
import { SecondBlockComponent } from '../second-block/second-block.component';
import { StyleDirective } from '../../directives/style.directive';
import { StyleService } from '../../services/style.service';
import { LanguageService } from '../../services/language.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FirstBlockComponent, SecondBlockComponent, StyleDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('languageChange', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate(800, style({ opacity: 1 }))
      ]), 
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor(private _styleService: StyleService, private languageService:LanguageService) { }

  colorHome: string = ''
  language: string = 'us'

  ngOnInit() {
    this._styleService.alertForChangeColores.subscribe(colorPaletteArray => {
      this.colorHome = colorPaletteArray[1]
    })

    this.languageService.alertForChangeLanguage.subscribe(language =>{
      console.log(language)
      this.language = language
    })

  }



}
