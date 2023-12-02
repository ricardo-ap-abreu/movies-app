import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieService } from './movie/services/movie.service';
import { MovieController } from './movie/controllers/movie.controller';

@Module({
  imports: [],
  controllers: [AppController, MovieController],
  providers: [AppService, MovieService],
})
export class AppModule {}
