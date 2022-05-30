import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  MyForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.MyForm = fb.group({
      userEmail: ['test@test.com', [Validators.email]],
      userPassword: ['12345678', [Validators.required]],

    });
  }
  onSubmit() {


    console.log("Hello");
  }
  ngOnInit() { }

}
