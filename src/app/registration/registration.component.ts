import { Component, ViewChild } from '@angular/core';
import {AuthService} from '../services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  public userId: number;
  public user: any;
  public usersCollection: any = [];
  public StatusMessage: boolean = true;
  @ViewChild('newUserForm') newUserForm: NgForm;

  constructor(private http: HttpClient, public authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  regestrationNewUser(data): void {
    this.user = {
      'name':  data.name,
      'lastName': data.lastName,
      'email': data.email,
      'password': data.password,
      'avatar': data.avatar = 'https://static.productionready.io/images/smiley-cyrus.jpg',
      'country': data.country,
      'phoneNumber': data.phoneNumber,
      'articles': []
    };
    this.authService.regestrationUser(this.user).subscribe(user => {
        this.user = data;
        this.userId = user['id']
        this.usersCollection.push(user)
        localStorage.setItem('LogInUser', JSON.stringify(this.usersCollection));
        this.authService.setStatusMessage(this.StatusMessage);
        this.router.navigate(['/user', this.userId]);
        this.newUserForm.reset();
    });
  }
}
