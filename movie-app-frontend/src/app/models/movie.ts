export class Movie {
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  imdbRating: string;
  imdbID: string;

  constructor(data: any) {
    this.title = data.Title;
    this.year = data.Year;
    this.rated = data.Rated;
    this.released = data.Released;
    this.runtime = data.Runtime;
    this.genre = data.Genre;
    this.director = data.Director;
    this.actors = data.Actors;
    this.plot = data.Plot;
    this.language = data.Language;
    this.country = data.Country;
    this.awards = data.Awards;
    this.poster = data.Poster;
    this.imdbRating = data.imdbRating;
    this.imdbID = data.imdbID;
  }

  getStarRating(): string {
    const rating = parseFloat(this.imdbRating);
    if (!isNaN(rating) && rating >= 0 && rating <= 10) {
      const roundedRating = Math.round(rating) / 2;
      return '★'.repeat(roundedRating) + '☆'.repeat(5 - roundedRating);
    } else {
      return 'N/A';
    }
  }

  getDirector(): string {
    return this.director || 'N/A';
  }

  getActors(): string {
    return this.actors || 'N/A';
  }

  getAwards(): string {
    return this.awards || 'N/A';
  }

  getLanguage(): string {
    return this.language || 'N/A';
  }

  getCountry(): string {
    return this.country || 'N/A';
  }

  getReleased(): string {
    return this.released || 'N/A';
  }

  getTitle(): string {
    return this.title || 'N/A';
  }

  getYear(): string {
    return this.year || 'N/A';
  }

  getGenre(): string {
    return this.genre || 'N/A';
  }

  getRuntime(): string {
    return this.runtime || 'N/A';
  }

  getPlot(): string {
    return this.plot || 'N/A';
  }

  getRated(): string {
    return this.rated || 'N/A';
  }

  getPoster(): string {
    return this.poster || 'N/A';
  }
}
