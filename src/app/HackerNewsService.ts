import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/concatAll';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

const URLS = {
  TOP_STORIES: 'https://hacker-news.firebaseio.com/v0/topstories.json'
}

@Injectable()
class HackerNewsService {
  constructor(private http: Http) {
  }

  getTopStories() {
    return this.http.get(URLS.TOP_STORIES)
            .map(s=> s.json().slice(0, 10)).concatAll()
            .map(id=>
              this.http.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).map(res=>res.json())
            );

  }
}

export default HackerNewsService;
