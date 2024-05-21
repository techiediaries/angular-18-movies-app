import { Component, DestroyRef, inject } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { AsyncPipe } from '@angular/common';
import { Movie } from '../../models/movie';
import { MovieComponent } from '../../components/movie/movie.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [AsyncPipe, MovieComponent, InfiniteScrollModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  private moviesService = inject(MoviesService);
  private pageNumber = 1;
  private destroyRef  =  inject(DestroyRef)
  public moviesObs$ = this.moviesService.fetchMoviesByType('popular', this.pageNumber);
  public moviesResults: Movie[] = []; 


  ngOnInit(){
    this.moviesObs$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
      this.moviesResults = data.results;
    });
  }

  onScroll(): void {
      this.pageNumber++;
      console.log("scrolled!!");

      this.moviesObs$ = this.moviesService.fetchMoviesByType('popular', this.pageNumber);
      this.moviesObs$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
        this.moviesResults = this.moviesResults.concat(data.results);
      });
    
  }
}
