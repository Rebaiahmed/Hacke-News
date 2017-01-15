import { Component, Input, OnInit } from '@angular/core';
import { Comment } from  '../models/Comment';

@Component({
  selector: 'app-comment-tree',
  templateUrl: 'app/comment-tree/comment-tree.component.html',
  styleUrls: ['app/comment-tree/comment-tree.component.scss']
})

export class CommentTreeComponent implements OnInit{

 @Input() commentTree: Comment[];

   constructor() {}

ngOnInit() {}

}