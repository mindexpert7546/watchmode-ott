import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CommunicationService } from '../service/communication.service';
import { useAnimation } from '@angular/animations';

@Component({
  selector: 'app-mvlist',
  templateUrl: './mvlist.component.html',
  styleUrls: ['./mvlist.component.css']
})
export class MvlistComponent implements OnInit {
  

  constructor(private api:ApiService,private communicationService: CommunicationService){}

  startingwithUserInput:any = [];
  mvList:any=[];
  i=0;

  //flag for checking result 
  flag:boolean = false;
  searchMessageForFutureUse: string = '';
 
  
  ngOnInit(): void {
      
    this.api.mvmodeLine().subscribe(result=>{
      this.mvList=result;
     });
      
      this.communicationService.searchObservable$.subscribe((searchMessage) => {
        this.mvList = [];
        this.i = 0;
        this.api.mvmodeLine().subscribe(result=>{
          this.startingwithUserInput=result;
          this.flag=false;
          for (let element of this.startingwithUserInput) {
            
            if(element.name.charAt(0)==searchMessage[0]){
               this.mvList[this.i++]=element; 
               this.flag=true;
            }
           
        }
        if(!this.flag){
          alert("Matching letter is not Available!")
        }
        
         }); 
        
        
      });   
          
  }


  }

  


