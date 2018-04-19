import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public user: any;
 public errorMessage: boolean = false;
  @ViewChild('logUserForm') logUserForm: NgForm;
  constructor( private http: HttpClient, public authService: AuthService, private router: Router) { }
  LogInUser(data): void {
    this.user = {
      userName:  data.name,
      userPassword: data.password
    };
    this.authService.getLoginusers(this.user.userName, this.user.userPassword).subscribe(user =>  {
      console.log(data)
      console.log(user)
      if (user.length === 0 || user == null) {
         this.errorMessage = true;
      } else {
        localStorage.setItem('LogInUser', JSON.stringify(user));
        this.authService.isLoggedIn = true;
        this.router.navigate(['']);
      }
    });
    this.logUserForm.reset();
  }
  ngOnInit() {

  }
}
