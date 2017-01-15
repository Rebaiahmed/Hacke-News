import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './Stories/Stories.component'
import { footerComponent} from './footer/footer.component'
import{ ItemComponent} from './Item/item.component'
import { CommentComponent} from './comment/comment.component'
import { CommentTreeComponent} from './comment-tree/comment-tree.component'
import { ItemCommentsComponent } from './items-comments/items-comments.component';
import { SettingsComponent} from './settings/settings.component'
import {LoaderComponent } from './loader/loader.component'
import { UserComponent} from './user/user.component'

import { HackerNewsService } from './Services/Hacker-news.service' ;
import { SettingsService } from './Services/Settings.service' ;

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule ],
  declarations: [ AppComponent,HeaderComponent, StoriesComponent, footerComponent, ItemComponent,CommentComponent, CommentTreeComponent,SettingsComponent,LoaderComponent,UserComponent ],
  providers : [HackerNewsService,SettingsService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
