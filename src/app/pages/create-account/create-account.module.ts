import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountPageComponent } from './create-account-page/create-account-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountFormComponent } from './create-account-page/components/create-account-form/create-account-form.component';

const routes: Routes = [
  {
    path: '',
    component: CreateAccountPageComponent
  }
];

@NgModule({
  declarations: [
    CreateAccountPageComponent,
    CreateAccountFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CreateAccountModule { }
