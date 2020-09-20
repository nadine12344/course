import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogePhotoComponent } from '../dialoge-photo/dialoge-photo.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  // public chartType: string = 'bar';

  // public chartDatasets: Array<any> = [
  //   { data: [81, 59, 70, 81], label: 'My First dataset' }
  // ];

  // public chartLabels: Array<any> = ['','', '','' ];

  // public chartColors: Array<any> = [
  //   {
  //     backgroundColor: [
  //       'rgba(255,99,132,1)',
  //       'rgba(255, 159, 64, 1)',
  //       'rgba(75, 192, 192, 1)',
  //       'rgba(255,99,132,1)'
        
  //     ],
  //     borderColor: [
  //       'rgba(255,99,132,1)',
  //       'rgba(255, 159, 64, 1)',
  //       'rgba(75, 192, 192, 1)',
  //       'rgba(255,99,132,1)'
       
  //     ],
  //     borderWidth: 2,
  //   }
  // ];

  // public chartOptions: any = {
  //   responsive: true,
    
  
  // };
  // public chartClicked(e: any): void { }
  // public chartHovered(e: any): void { }
  elements: any = [];
  shown: any = [];
  show="More";
  icon=true;
  iconc=0;

  value=20;
  headElements = ['', 'Title', 'Template', 'Course','Attendants','Start Date','End Date','Days Left','Solved','Graded',''];
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(DialogePhotoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
    for (let i = 1; i <= 50; i++) {
      let state=""
      if(i%2==0){
       state="available"; 
      }
      else{
        state="unavailable"
      }
      this.elements.push({Status:state, Title: 'Unit 1-assignment ' + i, Template: 'Unit 1-assignment1-lesson1-theme ' + i,Course: 'English G-'+i,Attendants:'G8 Engish'+i,startDate:new Date(2000+i%20+'-0'+(i%9+1)+'-0'+(i%4+1)),endDate:new Date(2000+i%22+'-0'+(i%9+1)+'-0'+(i%3+1)),DaysLeft:-i,Solved:i,Graded:10+i });
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
