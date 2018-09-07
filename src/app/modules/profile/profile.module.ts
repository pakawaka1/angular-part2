import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatTabsModule } from '@angular/material';

import { ProfileRouterModule } from '../profile-router/profile-router.module';
import { ProfileComponent } from '../../components/profile/profile.component';
import { ProfileHomeComponent } from '../../components/profile/profile-home/profile-home.component';
import { ProfileAboutComponent } from '../../components/profile/profile-about/profile-about.component';
import { ProfileContactComponent } from '../../components/profile/profile-contact/profile-contact.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    MatInputModule,
    ProfileRouterModule
  ],
  declarations: [
    ProfileComponent,
    ProfileHomeComponent,
    ProfileAboutComponent,
    ProfileContactComponent
  ]
})
export class ProfileModule { }
