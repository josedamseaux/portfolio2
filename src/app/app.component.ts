import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { StyleDirective } from './directives/style.directive';
import { StyleService } from './services/style.service';
import { LanguageService } from './services/language.service';
import { FirstBlockComponent } from './components/first-block/first-block.component';
import { SecondBlockComponent } from './components/second-block/second-block.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, HomeComponent, FirstBlockComponent, SecondBlockComponent, StyleDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'portfolioJoseDamseaux';

  constructor(private styleService: StyleService, private languageService: LanguageService) { 
  }

  colorA: string = ''
  colorB: string = ''
  colorC: string = ''

  clicked: boolean = true
  languageClick: boolean = true
  
  ngOnInit(){
    this.changeColor()
  }

  changeColor() {
    let colors = this.styleService.changeColor()
    this.colorA = colors[0]
    this.colorB = colors[1]
    this.colorC = colors[2]
  }

  changeLanguage(language: string){
    this.languageService.changeLanguage(language)
    this.languageClick = !this.languageClick


  }

}
