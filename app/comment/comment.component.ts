import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: 'app/comment/comment.component.html',
  styleUrls: ['app/comment/comment.component.scss']
})


export class CommentComponent implements OnInit {

@Input()
comment : Comment ;
collapse : boolean;

 constructor() {}

  ngOnInit() {
    this.collapse = false;
}

}