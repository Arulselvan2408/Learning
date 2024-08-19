import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
  div1Visibility:boolean = true;
  div2Visibility : boolean = true;
  num1:number = 0;
  num2:number = 0;

  isActive : boolean = true;
  selectedState :string = "";


  cities : string [] =['Chennai', 'Goa', 'Mumbai', 'Delhi']

  studentList :any [] = [
    {Id:15,name:"Arul", city:"Chennai",isActive:true},
    {Id:10,name:"selvan", city:"Chennai",isActive:true},
    {Id:25,name:"Keerthana", city:"Chennai",isActive:true},
    {Id:18,name:"sjakdhksa", city:"Mumbai",isActive:false},

  ]

  /**
   *
   */
  constructor(private router:Router) {
    
  }
HideDiv(){
  this.div1Visibility = false;
}

showDiv(){
  this.div1Visibility = true;
}

toggleDiv2(){
  this.div2Visibility = !this.div2Visibility
}

redirectToAttribute(){
  this.router.navigateByUrl('/attribute-dir')
}

}
