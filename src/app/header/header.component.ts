import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ConfirmationWindowComponent} from '../confirmation-window/confirmation-window.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public showLogOut: boolean = false;

  constructor(public authService: AuthService, private http: HttpClient, private router: Router, public dialog: MatDialog) {

  }

  openDialog() {
    this.dialog.open(ConfirmationWindowComponent, {});
  }
  ngOnInit() {
    this.showLogOut = this.authService.isUserLoggedIn();
  }
}

