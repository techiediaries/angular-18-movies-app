import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { ShowMovieComponent } from './pages/show-movie/show-movie.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'show-movie/:movieId',
    component: ShowMovieComponent,
  },
];
