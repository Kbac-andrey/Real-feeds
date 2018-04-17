import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: object = {};
  @ViewChild('logUserForm') logUserForm: NgForm;
  constructor( private http: HttpClient, public authService: AuthService) { }
  LogInUser(data) {
    this.user = {
      'userName':  data.name,
      'userLastname': data.lastName
    };
    console.log(data);
    console.log(this.user);
    this.authService.getLoginusers(this.user.username, this.user.userLastname).subscribe(user => {
      console.log(user);
    });
    // this.authService.getLoginusers().subscribe(user => console.log(user));
    // event.preventDefault()
    // const target = event.target
    // const userEmail = target.querySelector('#userEmail').value
    // const userPassword = target.querySelector('#userPassword').value
    // this.authService.getUser(userEmail, userPassword).subscribe(data => this.user
    //   console.log(this.user);
    // )
    this.logUserForm.reset();
  }
  ngOnInit() {}
}
