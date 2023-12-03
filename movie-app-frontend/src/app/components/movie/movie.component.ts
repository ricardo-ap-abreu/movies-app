import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieDataService } from 'src/app/services/movie-data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movieData: Movie | undefined;
  constructor(private movieDataService: MovieDataService) {}

  ngOnInit() {
    console.log('MovieComponent ngOnInit called');
    this.movieDataService.movieData$.subscribe((data) => {
      console.log('MovieComponent received movie data:', data);
      this.movieData = data;
    });
  }
}
