import { Controller, Get, Param } from '@nestjs/common';
import { MovieService } from '../services/movie.service';

@Controller('movie')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @Get(':title')
    async searchMovie(@Param('title') title:string){
        return this.movieService.searchMovie(title)
    }
}
