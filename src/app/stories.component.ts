import { Component } from '@angular/core';
import HackerNewsService from './HackerNewsService';


@Component({
  templateUrl: './stories.html',
  providers: [HackerNewsService],
  styleUrls: ['./stories.css']
})


export class Stories {
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
