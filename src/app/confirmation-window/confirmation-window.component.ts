import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-confirmation-window',
  templateUrl: './confirmation-window.component.html',
  styleUrls: ['./confirmation-window.component.css']
})
export class ConfirmationWindowComponent implements OnInit {
  public StatusMessage: boolean = false;
  constructor(public authService: AuthService, public dialogRef: MatDialogRef<ConfirmationWindowComponent>,private router: Router, @Inject(MAT_DIALOG_DATA) public data: any) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  onYESClick(): void {
    window.localStorage.removeItem('LogInUser');
    this.authService.setStatusMessage(this.StatusMessage);
    this.router.navigate(['']);
  }
  ngOnInit() {

  }

}
