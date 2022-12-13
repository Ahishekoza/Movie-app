import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/Service/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  MovieId:any;
  getMovieDetailResult:any;
  getMovieVideo:any;
  getMovieCast:any;

  constructor(private _route:ActivatedRoute,private _movieApi:MovieApiService) { }

  ngOnInit(): void {

    this.MovieId=this._route.snapshot.params['id']
    // console.log(this.MovieId)

    this.MovieDetails();
    this.MovieVideo();
    this.MovieCast();
  }

  MovieDetails(){
     this._movieApi.getMovieDetails(this.MovieId).subscribe(
      (data:any)=>{
        // console.log(data)
        this.getMovieDetailResult=data
      }
     )

    }

    // --------------------------------Movie Video Type should be trailer
    MovieVideo() {
      this._movieApi.getMovieVideo(this.MovieId).subscribe(
        (data:any)=>{
          data.results.forEach((element:any) => {
            if(element.type=="Trailer"){
              this.getMovieVideo=element.key
            }
          });
        }
      )
    }

    // ----------------------Movie Cast---------------------
    MovieCast(){

      this._movieApi.getMovieCast(this.MovieId).subscribe(
        (data:any)=>{
          this.getMovieCast=data.cast
        }
      )

    }

}
