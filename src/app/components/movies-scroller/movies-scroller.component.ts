import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies-scroller',
  standalone: true,
  imports: [AsyncPipe, MovieComponent],
  templateUrl: './movies-scroller.component.html',
  styleUrl: './movies-scroller.component.css'
})
export class MoviesScrollerComponent {

  @Input() dataObs!: Observable<Movie[]>;
  @ViewChild('content', { read: ElementRef })
  public content!: ElementRef<any>;

  public scrollRight(): void {
    this.content.nativeElement.scrollTo({ left: (this.content.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.content.nativeElement.scrollTo({ left: (this.content.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }
}
