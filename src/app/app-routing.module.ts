import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
	{
		path: 'user/:id' , 
		component: UsersListComponent
	},
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full'
	}
];

@NgModule({
  declarations: [],
  imports: [
	CommonModule,
	RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
