import { Component } from '@angular/core';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieService } from './services/movie.service';

//import { JSONP_PROVIDERS } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [MovieService]
})
export class AppComponent {
  
}
