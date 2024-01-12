import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService implements OnInit {

  languageSelected: string = ''
  private behaviorSubjectForLanguage = new BehaviorSubject<string>('us');
  alertForChangeLanguage = this.behaviorSubjectForLanguage.asObservable()

  constructor() { }

  ngOnInit() {
    console.log(this.languageSelected)
  }

  changeLanguage(language: string){
    this.behaviorSubjectForLanguage.next(language)
    console.log(this.languageSelected)
  }


}
