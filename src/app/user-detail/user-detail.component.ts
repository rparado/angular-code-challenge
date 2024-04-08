import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, throwError } from 'rxjs';
import { UserData } from 'src/model/user-data';

@Component({
	selector: 'app-user-detail',
	templateUrl: './user-detail.component.html',
	styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
	routeSubscription!: Subscription;

	user!: UserData;

	constructor(
	private readonly userService: UserService,
	private route: ActivatedRoute
	) {
	}

	ngOnInit(): void {
		this.routeSubscription = this.route.paramMap.subscribe(params => {
			const id: any = params.get('id');
			
			if(!id) {
				return throwError(new Error('ID not found in route parameters'));
			}
			return this.userService.findOneById(+id).subscribe(data => {
				console.log('data ', data);

				this.user = data;
			})
		});
	
	}

	ngOnDestroy(): void {
	//Called once, before the instance is destroyed.
	//Add 'implements OnDestroy' to the class.
	this.routeSubscription.unsubscribe();
	}

}
