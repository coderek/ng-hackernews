import { Component } from '@angular/core';
import HackerNewsService from './HackerNewsService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HackerNewsService],
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Hacker News';
  topStories = [];

  constructor(service: HackerNewsService) {
    service.getTopStories()
            .subscribe(story =>{
              story.subscribe(s=> {
                this.topStories.push(s);
              });
            });
  }
}
