import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  apiurl = 'https://api.watchmode.com/v1/sources/?apiKey=InD1jkxZ5YhlNxPXjQDhAGzagXojsHXrWjWODaNd'
  mvmodeLine():Observable<any>{
    return this._http.get(this.apiurl);
     
  }
}
