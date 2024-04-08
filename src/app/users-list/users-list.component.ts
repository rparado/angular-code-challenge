import {Component} from '@angular/core';
import {UserService} from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  public readonly users$ = this.userService.getAll();
  constructor(
    private readonly userService: UserService,
    private route: Router
  ) {
  }

  goToDetail(id: number) {
    this.route.navigateByUrl('/user/'+id)
  }
}
