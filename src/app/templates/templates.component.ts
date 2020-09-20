import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  elements: any = [];
  shown: any = [];
  show="More";
  icon=true;
  iconc=0;
  value=20;
  headElements = ['', 'Title', 'Template', 'Course','Attendants','Start Date','End Date','Days Left','Solved','Graded',''];
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
      this.elements.push({Status:state,Course: 'English G-'+i,startDate:new Date(2000+i%20+'-0'+(i%9+1)+'-0'+(i%4+1)),endDate:new Date(2000+i%22+'-0'+(i%9+1)+'-0'+(i%3+1)),DaysLeft:-i });
    }
    this.shown=this.elements.slice(0,10);
  }

  clicked(){
 
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

