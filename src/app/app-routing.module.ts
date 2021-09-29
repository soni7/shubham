import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { DashboardComponent } from './view/dashboard/dashboard.component';

export const routes: Routes=[
  { path:'dashboard', component : DashboardComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }

