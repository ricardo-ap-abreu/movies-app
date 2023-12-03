import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable()
export class MovieService {
    async searchMovie(title: string){
        const response = await axios.get(`${environment.backendUrl}&t=${title}`)
        console.log(`Filme requisitado pelo postman: ${response.data.Title}`)
        return response.data
    }
}
