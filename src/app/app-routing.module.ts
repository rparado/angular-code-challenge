import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
	
	
	{
		path: '',
		redirectTo: '/user',
		pathMatch: 'full'
	},
	{ path: 'user', component: UsersListComponent },
	{
		path: 'user/:id' , 
		component: UserDetailComponent,
		pathMatch: 'full'
	},
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
