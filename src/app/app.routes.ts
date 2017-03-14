import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';


const appRoutes: Routes = [
		{ path: '',   component:MoviesComponent, pathMatch: 'full' },
		{path:'movie/:id',component:MovieComponent},
	
	  ];


@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
	
})

export class AppRoutingModule {}
export const routingComponents = [MoviesComponent]

