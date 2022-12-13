import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private _http:HttpClient) { }

  apiKey="698e383bedf4f326861671a435018b83"

  bannerApiData(): Observable<any> {
    return this._http.get(`${baseUrl}/trending/all/week?api_key=${this.apiKey}`);
  }

  trendingMovies():Observable<any>{
    return this._http.get(`${baseUrl}/trending/movie/day?api_key=${this.apiKey}`);
  }

  getMovieDetails(id: any): Observable<any> {
    return this._http.get(`${baseUrl}/movie/${id}?api_key=${this.apiKey}`)
  }

  getMovieVideo(id:any):Observable<any>{
    return this._http.get(`${baseUrl}//movie/${id}/videos?api_key=${this.apiKey}`)
  }

  getMovieCast(id: any): Observable<any> {
    return this._http.get(`${baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`)
  }

  fetchActionMovies(): Observable<any> {
    return this._http.get(`${baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=28`);
  }

  // adventure
  fetchAdventureMovies(): Observable<any> {
    return this._http.get(`${baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=12`);
  }


  // -------------SeracH Movie by Movie Name
  getSearchMovie(data: any): Observable<any> {
    console.log(data, 'movie#');

    return this._http.get(`${baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`);
  }

}
