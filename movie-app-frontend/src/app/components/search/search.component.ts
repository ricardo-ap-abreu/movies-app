import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { SearchMovieService } from 'src/app/services/search-movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  title: string = '';
  movieData: Movie | undefined;
  constructor(private searchMovieService: SearchMovieService) {}

  searchMovie() {
    this.searchMovieService.searchMovie(this.title).subscribe((data) => {
      this.movieData = data;
    });
  }

  resetForm() {
    this.title = '';
  }
}
