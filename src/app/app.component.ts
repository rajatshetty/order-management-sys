import { Component } from '@angular/core';
import { Article } from 'app/models/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles:Article[];
  title = 'app works!';
  /**
   *
   */
  constructor() {
    this.articles = [
      new Article('Titanic', 'http://www.titanic.com', 0),
      new Article('Angular', 'http://www.angular.com', 0),
      new Article('CGI', 'http://www.cgi.com', 0)
    ];
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value, link.value, 0));
    return false;
    }

}
