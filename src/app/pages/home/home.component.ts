import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/Service/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bannerMovieList:any=[];
  trendingMovieList:any=[];
  actionMoviesList:any=[];
  adventureMovieList:any=[];
  constructor(private _movieapi:MovieApiService) { }

  ngOnInit(): void {
    // -------Banner Movies
    this.bannerMovies();

    // -----------------Trending Movies
    this.trendingMovies();

    // ----------------Action Movies--------------
    this.actionMovies();

    // -------------Adventure Movies
    this.adventureMovies();
  }

  bannerMovies(){
    this._movieapi.bannerApiData().subscribe(
      (data:any)=>{
        // ----------------------- .results because array of movies is present inside the results------
        // console.log(data.results);
        this.bannerMovieList=data.results;
      }
    )
  }
  
  trendingMovies(){
    this._movieapi.trendingMovies().subscribe(
      (data:any)=>{
        // console.log(data.results);
        this.trendingMovieList=data.results;
      }
    )
  }

  actionMovies(){
    this._movieapi.fetchActionMovies().subscribe(
      (data:any)=>{
        // console.log(data.results)
        this.actionMoviesList=data.results
      }
    )
  }

  adventureMovies(){
    this._movieapi.fetchActionMovies().subscribe(
      (data:any)=>{
        // console.log(data.results)
        this.adventureMovieList=data.results
      }
    )
  }
}
