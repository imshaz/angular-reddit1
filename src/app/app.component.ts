import { Component } from '@angular/core';
import { Article } from './article/article.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-reddit';
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'https://angular.io', 10),
      new Article('Asp.net core', 'https://asp.com', 10),
      new Article('Google', 'https://google.com'),
    ];
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log('addArticle', title.value, link.value);
    if (title.value != '' && link.value != '')
      this.articles.push(new Article(title.value, link.value, 0));
    return false;
  }
}
