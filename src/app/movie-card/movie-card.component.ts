import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service'


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
removeFavorite(arg0: any) {
throw new Error('Method not implemented.');
}
addFavorite(arg0: any) {
throw new Error('Method not implemented.');
}
openDirectorDialog(arg0: any) {
throw new Error('Method not implemented.');
}
openGenreDialog(arg0: any) {
throw new Error('Method not implemented.');
}
openSynopsisDialog(arg0: any) {
throw new Error('Method not implemented.');
}
  movies: any[] = [];
movie: any;
  constructor(public fetchApiData: FetchApiDataService) { }

ngOnInit(): void {
  this.getMovies();
}

getMovies(): void {
  this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }
}