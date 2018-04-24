import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ConfirmationWindowComponent} from '../confirmation-window/confirmation-window.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  public showLogOut: boolean = false;
  logInuser: string[] = [];
  logInuserId: number;

  constructor(public authService: AuthService, private http: HttpClient, private router: Router,  public dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(ConfirmationWindowComponent, {});
  }
  getUserIsLoggedInId () {
    this.logInuser = this.authService.findgetLoggedUser();
    for (let i = 0; i < this.logInuser.length; i++) {
      this.logInuserId = this.logInuser[i]['id'];
      console.log(this.logInuserId);
    }
  }
  ngOnInit() {
    this.authService.isLoggedIn.subscribe(value => {
      this.showLogOut = value;
      this.getUserIsLoggedInId();
    });
    this.showLogOut = this.authService.isUserLoggedIn();
    this.getUserIsLoggedInId();
  }
}

