import { MatarialModule } from './../matarial/matarial.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './Components/profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    ProfileRoutingModule,
    FormsModule,
    BrowserModule,
    CommonModule,
    MatarialModule,
    ReactiveFormsModule,
  ],
})
export class ProfileModule {}
