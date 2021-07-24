import { Component, OnInit, HostBinding } from '@angular/core';
import { Article } from './article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';

  article: Article;
  constructor() {
    this.article = new Article('Angular.js', 'https://angular.io', 10);
  }

  upVote() {
    this.article.voteUp();
    return false;
  }
  downVote() {
    this.article.voteDown();
    return false;
  }

  getDomain() {
    return this.article.domain();
  }
  ngOnInit(): void {}
}
