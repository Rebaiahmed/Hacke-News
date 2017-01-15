import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoriesComponent } from './Stories/Stories.component'
import { footerComponent} from './footer/footer.component'
import{ ItemComponent} from './Item/item.component'
import { CommentComponent} from './comment/comment.component'
import { CommentTreeComponent} from './comment-tree/comment-tree.component'
import { ItemCommentsComponent } from './items-comments/items-comments.component';
import { SettingsComponent} from './settings/settings.component'
import {LoaderComponent } from './loader/loader.component'
import { UserComponent} from './user/user.component'


export const routes : Routes =
[{path :'user/:id', component:UserComponent },
{path :'ItemComponent/:id', component:ItemComponent },
 {path: 'show/:page', component: StoriesComponent, data: {storiesType: 'show'}},
  {path: 'ask/:page', component: StoriesComponent, data: {storiesType: 'ask'}},
{path: 'jobs/:page', component: StoriesComponent, data: {storiesType: 'jobs'}},
  {path: 'news/:page', component: StoriesComponent, data: {storiesType: 'news'}},
{path: 'newest/:page', component: StoriesComponent, data: {storiesType: 'newest'}},
 {path: '', redirectTo: 'news/1', pathMatch : 'full'},]


 export const routing :ModuleWithProviders= RouterModule.forRoot(routes);