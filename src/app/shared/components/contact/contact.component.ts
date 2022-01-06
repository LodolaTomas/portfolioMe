import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{

  constructor( private fb: FormBuilder, private http : HttpClient) { }
  
  userForm: FormGroup = this.fb.group({ 
    name: ['',Validators.required],
    email: ['',Validators.required],
    message: ['',Validators.required]
  });
  onSubmit(){
    if (this.userForm.valid) {
      const email = this.userForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mdobkydd',
        { name: email.name, replyto: email.email, message: email.message },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          }
        );
    }else{
      console.log('form is not valid');
    }    
  }
}
