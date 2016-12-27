import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';
import { RouterModule, Routes } from '@angular/router';

import { App } from './app.component';
import { Stories } from './stories.component';
import { Comments } from './comments.component';
import { PageNotFound } from './pageNotFound.component';


const appRoutes: Routes = [
  {
    path: 'stories',
    pathMatch: 'full',
    component: Stories
  },
  {
    path: 'stories/:id/comments',
    component: Comments
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/stories'
  },
  {
    path: '**',
    component: PageNotFound
  }
]


@NgModule({
  declarations: [
    Stories,
    App,
    Comments,
    PageNotFound
  ],
  imports: [
    MomentModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
