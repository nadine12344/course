import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-returned',
  templateUrl: './returned.component.html',
  styleUrls: ['./returned.component.scss']
})
export class ReturnedComponent implements OnInit {
  elements: any = [];
  shown: any = [];
  show="More";
  icon=true;
  iconc=0;
  value=20;
  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= 50; i++) {
      let state=""
      if(i%2==0){
       state="available"; 
      }
      else{
        state="unavailable"
      }
      this.elements.push({Status:state, Title: 'Title ' + i%10, Template: 'Template ' + i,Course: 'English'+i });
    }
    this.shown=this.elements.slice(0,10);
  }

  clicked(){
 this.icon=!this.icon
    if(this.show==="More"){
      this.shown=this.elements
    this.show="Less";}
    else{
      this.show="More"
      this.shown=this.elements.slice(0,10);
    }
  
  
  }
filtera(){
  if(this.show=="More")
  this.shown = this.elements.slice(0,10).filter(word => word.Status=="available");
else
this.shown=this.elements.filter(word => word.Status=="available");

}
filterb(){
  if(this.show=="More")
  this.shown = this.elements.slice(0,10).filter(word => word.Status=="unavailable");
else
this.shown=this.elements.filter(word => word.Status=="unavailable");
}
}

