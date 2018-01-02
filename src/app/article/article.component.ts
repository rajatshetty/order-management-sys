import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { Article } from 'app/models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
    }
})
export class ArticleComponent implements OnInit {
@Input() article: Article;
  constructor() { }

  ngOnInit() {
  }

  voteUp(){
    this.article.votes+=1;
    return false;
  }

  voteDown(){
    this.article.votes-=1;
    return false;
  }
}
