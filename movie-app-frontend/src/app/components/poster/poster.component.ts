import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieDataService } from 'src/app/services/movie-data.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
})
export class PosterComponent implements OnInit {
  movieData: Movie | undefined;
  constructor(private movieDataService: MovieDataService) {}

  ngOnInit() {
    console.log('PosterComponent ngOnInit called');
    this.movieDataService.movieData$.subscribe((data) => {
      console.log('PosterComponent received movie data:', data);
      this.movieData = data;
    });
  }
}
