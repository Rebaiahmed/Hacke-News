
import { Component, OnInit } from '@angular/core';
import { HackerNewsService } from '../Services/Hacker-news.service' ;

@Component({
  selector: 'app-stories',
  templateUrl: 'app/Stories/Stories.component.html',
  styleUrls: ['app/Stories/Stories.component.scss']
})


export class StoriesComponent implements OnInit {

items : number[];

constructor(private hnservice : HackerNewsService){
    this.items = Array(30);
}

    ngOnInit(){
        this.hnservice.fetchStories()
        .subscribe(items =>this.items=items,
        error=>console.log('err',error))

    }
}