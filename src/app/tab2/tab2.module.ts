import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { LogInComponent } from '../log-in/log-in.component';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import { SignUpComponent } from '../sign-up/sign-up.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule, ReactiveFormsModule,
  ],
  declarations: [Tab2Page, SignUpComponent, LogInComponent]
})
export class Tab2PageModule { }
