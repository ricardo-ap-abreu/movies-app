export class Movie {
  title: string;
  plot: string;
  imdbRatings: string;
  poster: string;
  actors: string;
  rated: string;

  constructor(
    title: string,
    plot: string,
    imdbRatings: string,
    poster: string,
    actors: string,
    rated: string
  ) {
    this.title = title;
    this.plot = plot;
    this.imdbRatings = imdbRatings;
    this.poster = poster;
    this.actors = actors;
    this.rated = rated;
  }
}
