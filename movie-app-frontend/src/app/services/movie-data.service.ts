import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  private movieDataSubject = new Subject<Movie>();
  constructor() {}

  movieData$: Observable<Movie> = this.movieDataSubject.asObservable();

  updataMovieData(movieData: Movie) {
    this.movieDataSubject.next(movieData);
  }
}
