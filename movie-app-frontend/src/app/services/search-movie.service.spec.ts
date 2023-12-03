import { TestBed } from '@angular/core/testing';

import { SearchMovieService } from './search-movie.service';

describe('MovieService', () => {
  let service: SearchMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
