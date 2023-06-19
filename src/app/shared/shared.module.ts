import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CardMovieComponent } from './../private/pages/home/components/card-movie/card-movie.component';
import { SearchMovieComponent } from './../private/pages/home/components/search-movie/search-movie.component';
import { ListMovieComponent } from './../private/pages/home/components/list-movie/list-movie.component';
import { HeaderUserComponent } from '../private/components/header-user/header-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    CardMovieComponent,
    SearchMovieComponent,
    ProgressBarComponent,
    ListMovieComponent,
    HeaderUserComponent,
  ],
  declarations: [
    CardMovieComponent,
    SearchMovieComponent,
    ProgressBarComponent,
    HeaderUserComponent,
    ListMovieComponent,
  ],
  providers: [],
})
export class SharedModule {}
