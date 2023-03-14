import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './Components/profile/profile.component';
import { CandeactivateGuard } from '../guards/candeactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    canDeactivate: [CandeactivateGuard],
  },

  {
    path: '**',
    redirectTo: '/user-profile',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ProfileRoutingModule {}
