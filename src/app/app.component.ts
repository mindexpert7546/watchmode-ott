import { Component, OnInit } from '@angular/core';
import { CommunicationService } from './service/communication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'WatchModeApp';
  userInput = '';

  constructor(private communicationService: CommunicationService) {}
  
  
  ngOnInit(): void {
   
  }

  onSearch(){
     this.communicationService.triggerSearch(this.userInput);
     this.userInput='';
  }


}