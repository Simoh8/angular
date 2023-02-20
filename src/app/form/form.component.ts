import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

 @ViewChild('Detailsform') form!: NgForm
  // form!:NgForm
  onSubmit(){
   console.log(this.form );
   
    
     }

}
