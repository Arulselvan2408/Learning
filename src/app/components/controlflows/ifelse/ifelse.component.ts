
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {
 isDiv1Visible : boolean = false;
 isDiv2Visible : boolean = false;
 num1 : number = 0;
 num2 : number = 0;

 showDiv1(){
  this.isDiv1Visible = true;
 }

 hideDiv1(){
  this.isDiv1Visible = false;
 }

 toggleDiv2(){
  this.isDiv2Visible = !this.isDiv2Visible;
 }
}
