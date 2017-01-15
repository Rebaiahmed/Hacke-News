import { Component, Input, OnInit } from '@angular/core';
import { HackerNewsService } from '../Services/Hacker-news.service' ;


@Component({
  selector: 'item',
  templateUrl: 'app/Item/item.component.html',
  styleUrls: ['app/Item/item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemID: number;
  item :any;

  constructor(private hnservice : HackerNewsService) { 
   
  }

  ngOnInit() {
            console.log('the item is', this.item, 'id is', this.itemID);
      this.hnservice.fetchItem(this.itemID)
      .subscribe(data => {this.item=data},
      error=>console.log('error when fetching item', error))
  }

}