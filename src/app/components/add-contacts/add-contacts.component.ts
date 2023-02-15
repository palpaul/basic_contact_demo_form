import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent {
  addContactFormControl = new FormControl('', [Validators.required]);

  form = new FormGroup({
    contactName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    contactEmail: new FormControl('', [Validators.required, Validators.email]),
    contactNum: new FormControl('', Validators.required),
    contactId:new FormControl('',Validators.required)
  });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
  }
}
