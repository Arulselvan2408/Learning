import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
statesList : any =[
  "Tamil Nadu",
  "Kerala",
  "Karnataka",
  "Andhra Pradesh",
  "Telengana"
]
person : any = {
  firstname :'',
  lastname:'',
  username:'',
  city:'',
  state:'',
  zipcode:'',
  isTermsAccepted : false
}
formValue:any
Submit(){
  this.formValue= this.person;
  console.log(this.formValue);
}
}
