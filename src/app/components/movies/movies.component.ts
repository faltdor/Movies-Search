import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  popularList : Array<Object>;
  theatersList : Array<Object>;
  searchStr: string;
  searchResult: Array<Object>;
   
  constructor(private _movieService: MovieService) { 

  	this._movieService.getPopular()
  		.subscribe(data => {
  			this.popularList = data.results;
  		});
  	this._movieService.getTheaters()
  		.subscribe(data => {
  			this.theatersList = data.results;
  		});
  }

  ngOnInit() {
  }

  searchMovies($event){
    $event.preventDefault();
    console.log(this.searchStr);
    
    this._movieService.searchMovies(this.searchStr)
      .subscribe(data => {
        this.searchResult = data.results;
      });

  }

}
