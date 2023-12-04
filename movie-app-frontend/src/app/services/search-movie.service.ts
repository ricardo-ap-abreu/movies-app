import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { MovieDataService } from './movie-data.service';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class SearchMovieService {
  private apiUrl = 'http://localhost:3000/movie';

  constructor(
    private http: HttpClient,
    private movieDataService: MovieDataService
  ) {}

  searchMovie(title: string): Observable<any> {
    return this.http.get<Movie>(`${this.apiUrl}/${title}`).pipe(
      map((data) => new Movie(data)),
      tap((movieData: Movie) => {
        this.movieDataService.updataMovieData(movieData);
      })
    );
  }
}
