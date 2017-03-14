import { Injectable } from '@angular/core';

import {Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
   
@Injectable()
export class MovieService { 
   
  private apiKey: string;

  constructor(private _jsonp:Jsonp) { 
  	this.apiKey = 'your api key';
  }

  getPopular(){
  	return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apiKey)
  				.map(res => res.json());
  }

  getTheaters(){
  	return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2016-06-20&primary_release_date.lte=2017-08-02&sort_by=popularity.desc&api_key='+this.apiKey)
  				.map(res => res.json());
  }

  searchMovies(searchStr:string){
  	return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apiKey)
  				.map(res => res.json());
  }

  getMovie(movieId:string){
    return this._jsonp.get('https://api.themoviedb.org/3/movie/'+movieId+'?callback=JSONP_CALLBACK&api_key='+this.apiKey)
          .map(res => res.json());
  }

}
