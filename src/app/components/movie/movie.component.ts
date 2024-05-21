import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { DatePipe } from '@angular/common';
import { imagesBaseUrl } from '../../services/movies.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {

  public imagesBaseUrl = imagesBaseUrl;
  @Input() movie!: Movie;

}
