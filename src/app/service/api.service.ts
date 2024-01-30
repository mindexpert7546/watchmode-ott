import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  apiurl = 'https://api.watchmode.com/v1/sources/?apiKey=Atta9f77i0HMWURhwSaeGEWJ0Hp8Nt5faVFRQuKy '
  mvmodeLine():Observable<any>{
    return this._http.get(this.apiurl);
     
  }
}
