import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieDataService } from 'src/app/services/movie-data.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  movieData: Movie | undefined;
  constructor(private movieDataService: MovieDataService) {}

  ngOnInit() {
    this.movieDataService.movieData$.subscribe((data) => {
      this.movieData = data;
    });
  }

  getStarRating(): string {
    return this.movieData ? this.movieData.getStarRating() : 'N/A';
  }
}
