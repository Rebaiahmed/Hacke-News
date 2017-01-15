import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';


import { User } from  '../models/User';

import { HackerNewsService } from '../Services/Hacker-news.service' ;

@Component({
  selector: 'app-user',
  templateUrl: 'app/user/user.component.html',
  styleUrls: ['app/user/user.component.scss']
})


export class UserComponent implements OnInit{

user : User;
errorMessage : string;
sub : Subscription;

constructor(private _hackerservice : HackerNewsService,
private _location :Location, private route : ActivatedRoute){}


ngOnInit(){
this.sub = this.route.params.subscribe(params=>{
    let userId = +params['id'];
    this._hackerservice.fetchUser(userId).subscribe(data => {
        this.user = data;
}, error => this.errorMessage = 'Could not load user ' + userId + '.');
})
}

 goBack() {
    this._location.back();
}
}