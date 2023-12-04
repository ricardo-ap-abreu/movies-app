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
    this.movieDataService.movieData$.subscribe((data) => {
      this.movieData = data;
    });
  }

  getPoster(): string {
    return this.movieData ? this.movieData.getPoster() : 'N/A';
  }
}
