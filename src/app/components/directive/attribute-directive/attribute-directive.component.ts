import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
div1BgColour : string = "bg-primary";

isDiv2Active : boolean = false;
num1 : number = 0;
num2 : number = 0;
studentList :any [] = [
  {Id:15,name:"Arul", city:"Chennai",isActive:true, marks:75},
  {Id:10,name:"selvan", city:"Chennai",isActive:true, marks :80},
  {Id:25,name:"Keerthana", city:"Chennai",isActive:true, marks :90},
  {Id:18,name:"sjakdhksa", city:"Mumbai",isActive:false, marks:30}

]

customStyle : any = {
  "color" : 'white',
  "background-color" : 'red',
  "width" : "200px",
  "height": "200px",
  "border-radius" : "50%"
}

changeColour(colour:string){
  this.div1BgColour = colour;
}

toggleDiv2(){
  this.isDiv2Active = !this.isDiv2Active;
}
}
