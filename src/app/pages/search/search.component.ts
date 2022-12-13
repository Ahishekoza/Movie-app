import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { MovieApiService } from 'src/Service/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _movieApi:MovieApiService) { }

  searchResult:any;
  searchForm:any;

  ngOnInit(): void {

    this.searchForm=new FormGroup({
      'movieName':new FormControl(null)
    })

  }

  SubmitForm(){
    console.log(this.searchForm.value)

    this._movieApi.getSearchMovie(this.searchForm.value).subscribe(
      (data:any)=>{
        console.log(data.results)
        this.searchResult=data.results
      }
    )
  }

}
