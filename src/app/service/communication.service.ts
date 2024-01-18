import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private searchSubject = new Subject<string>();
  searchObservable$ = this.searchSubject.asObservable();

 
  triggerSearch(message: string) {
    this.searchSubject.next(message);
  }
}
