import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './class/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  @Output() public outToParent = new EventEmitter();
  user: User;
  MyForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.MyForm = fb.group({
      userFirstName: ['Olena', [Validators.required]],
      userLastName: ['Fedusenko', [Validators.required]],
      userEmail: ['test@test.com', [Validators.email]],
      userPassword: ['12345678', [Validators.required]],

    });


  }

  ngOnInit() { }
  onSubmit() {

    this.user = new User(this.MyForm.value.userFirstName, this.MyForm.value.userLastName, this.MyForm.value.userEmail, this.MyForm.value.userPassword);
    console.log(this.user);
    this.outToParent.emit(this.user);
  }
}
