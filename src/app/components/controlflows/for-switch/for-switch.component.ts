import { Component } from '@angular/core';

@Component({
  selector: 'app-for-switch',
  standalone: true,
  imports: [],
  templateUrl: './for-switch.component.html',
  styleUrl: './for-switch.component.css'
})
export class ForSwitchComponent {

  cities : string [] =['Chennai', 'Goa', 'Mumbai', 'Delhi']

  studentList :any [] = [
    {Id:15,name:"Arul", city:"Chennai",isActive:true},
    {Id:10,name:"selvan", city:"Chennai",isActive:true},
    {Id:25,name:"Keerthana", city:"Chennai",isActive:true},
    {Id:18,name:"sjakdhksa", city:"Mumbai",isActive:false},

  ]

}
