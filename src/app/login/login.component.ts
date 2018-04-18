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
 public user: any;
 public errorMessage: boolean = false;
  @ViewChild('logUserForm') logUserForm: NgForm;
  constructor( private http: HttpClient, public authService: AuthService) { }
  LogInUser(data) {
    this.user = {
      userName:  data.name,
      userLastname: data.lastName
    };
    this.authService.getLoginusers(this.user.userName, this.user.userLastname).subscribe(user => {
      console.log(user);
      if (user === {} || user == null) {
        console.log(user);
         this.errorMessage = true;
      } else {
        localStorage.setItem('LogInuser', JSON.stringify(user));
      }
    });
    this.logUserForm.reset();
  }
  ngOnInit() {

  }
}
