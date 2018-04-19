import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-confirmation-window',
  templateUrl: './confirmation-window.component.html',
  styleUrls: ['./confirmation-window.component.css']
})
export class ConfirmationWindowComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmationWindowComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  onYESClick(): void {
    window.localStorage.removeItem('LogInUser');
  }
  ngOnInit() {
  }

}
