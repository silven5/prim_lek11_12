import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LogInComponent } from '../log-in/log-in.component';
import { User } from '../sign-up/class/user';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  signUpUser: User;
  @ViewChild('dynamic', { read: ViewContainerRef })
  private viewRef: ViewContainerRef;
  private componentRef: ComponentRef<SignUpComponent>;
  private componentRef1: ComponentRef<LogInComponent>;
  constructor() { }
  signUp() {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(SignUpComponent);
  }
  logIn() {
    this.viewRef.clear();
    this.componentRef1 = this.viewRef.createComponent(LogInComponent);
  }

}
