import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  ngOnInit() {}

  loginUser() {
    event.preventDefault()
    const target = event.target
    const userEmail = target.querySelector('#userEmail').value
    const userPassword = target.querySelector('#userPassword').value
    console.log(userEmail, userPassword);
  }
}
