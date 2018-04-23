import { Component, ViewChild } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  userId: number;
  user: object = {};
  public StatusMessage: boolean = true;

  @ViewChild('newUserForm') newUserForm: NgForm;

  constructor(public authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  regestrationNewUser(data) {
    this.user = {
      'name':  data.name,
      'lastName': data.lastName,
      'email': data.email,
      'password': data.password,
      'avatar': data.avatar = 'https://static.productionready.io/images/smiley-cyrus.jpg',
      'country': data.country,
      'phoneNumber': data.phoneNumber,
    };
    this.authService.regestrationUser(this.user).subscribe(user => {
      this.user = data
      this.userId = user['id']
      localStorage.setItem('LogInUser', JSON.stringify(user));
      this.authService.setStatusMessage(this.StatusMessage);
      this.router.navigate(
        ['/user', this.userId]);
      this.newUserForm.reset();
    });
  }
}
