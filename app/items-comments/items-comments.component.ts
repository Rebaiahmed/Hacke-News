import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';




import { Story } from '../models/Story';
import { Settings } from '../models/Settings';

import { HackerNewsService } from '../Services/Hacker-news.service' ;
import { SettingsService } from '../Services/Settings.service' ;

@Component({
  selector: 'app-item-comments',
  templateUrl: 'app/items-comments/item-comments.component.html',
  styleUrls: ['app/items-comments/item-comments.component.scss']
})

export class ItemCommentsComponent implements OnInit {



settings : Settings
sub : Subscription;
errorMessage : string;
item : Story;
constructor(private hckservice: HackerNewsService, private settingservice : SettingsService
,private route :ActivatedRoute, private _location :Location){
    this.settings = this.settingservice.settings;
}


ngOnInit(){
    window.scrollTo(0,0);
    this.sub = this.route.params
    .subscribe(params=>{
       let itemId = +params['id'];
       this.hckservice.fetchItem(itemId)
           .subscribe(item=>{
               this.item=item;
           },error=>this.errorMessage='Could not load item')
    })

}

goBack(){
this._location.back();
}


get hasUrl() : boolean{
return this.item.url.indexOf('http')==0;
}

}