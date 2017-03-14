import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import {ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie:Object; 	
  constructor(private _router:ActivatedRoute,private _movieService:MovieService) { }

  ngOnInit() {
  	
  }

}
