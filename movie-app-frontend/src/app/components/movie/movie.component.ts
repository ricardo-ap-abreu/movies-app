import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieDataService } from 'src/app/services/movie-data.service';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movieData: Movie | undefined;
  constructor(private movieDataService: MovieDataService) {}

  ngOnInit() {
    this.movieDataService.movieData$.subscribe((data) => {
      this.movieData = data;
    });
  }

  getTitle(): string {
    return this.movieData ? this.movieData.getTitle() : 'N/A';
  }

  getPlot(): string {
    return this.movieData ? this.movieData.getPlot() : 'N/A';
  }

  getActors(): string {
    return this.movieData ? this.movieData.getActors() : 'N/A';
  }

  getRated(): string {
    return this.movieData ? this.movieData.getRated() : 'N/A';
  }
}
