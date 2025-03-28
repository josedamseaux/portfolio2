import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { StyleDirective } from './directives/style.directive';
import { StyleService } from './services/style.service';
import { LanguageService } from './services/language.service';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, EducationComponent, HomeComponent, ContactComponent, WorkExperienceComponent, StyleDirective],
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

    window.addEventListener('scroll', () => {
      const scrollNav = document.getElementById('scrollNav');
      if (window.scrollY > 63) { // Cambia este valor según la cantidad de scroll que desees
          scrollNav!.style.opacity = '1'; // Hacer el elemento visible
      } else {
          scrollNav!.style.opacity = '0'; // Ocultar el elemento
      }
  });

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
