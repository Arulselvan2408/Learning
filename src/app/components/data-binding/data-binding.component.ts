import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  //string
  courseName:string = "Angular 18";
  input = "checkbox";
  myclassName = "bg-danger"
  firstName = signal('Arulselvan');
  stateName ="TamilNadu"
  //number

  rollNumber:number = 123;
  //date

  currentDate:Date = new Date();


  //boolean
  isIndian:boolean = true;

  constructor(){
    this.courseName = "Angular 18 Tutorial";
  }

  showAlert(message:string){
    alert(message);
  }

  changeCourseName(){
    this.courseName = "React";
    console.log(this.stateName)
    this.firstName.set('Balasubramanian');
    this.isIndian = !this.isIndian;
  }
}
