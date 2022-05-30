import { IWrite } from './class/iwrite';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { User } from './class/user';
import { WriteConsol } from './class/writeConsol';
@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss'],
})
export class UserEditorComponent implements OnInit {
  user: User;
  myForm: FormGroup;
  logger: IWrite;
  //Патерн для валідування мобільного номеру
  mobnumPattern = "^((\\+38-?)|0)?[0-9]{10}$"; 
  constructor(fb: FormBuilder) {
            this.myForm = fb.group({
             userName: ['Olena', [Validators.required]],
            userEmail: ['olena@gmail.com', [ Validators.email]],
              userPhones: ['+380992223344', Validators.pattern(this.mobnumPattern)],
             userColor: ['Green'],
        });
   }

  ngOnInit() {}
onSubmit() {
 this.user=new User(this.myForm.value.userName,this.myForm.value.userEmail, this.myForm.value.userPhones,this.myForm.value.userColor)
  this.logger = new WriteConsol();
  this.logger.write(this.user);
}
}
