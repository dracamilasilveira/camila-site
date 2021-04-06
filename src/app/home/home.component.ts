import { Component, OnInit } from '@angular/core';
import { MatDialog  } from '@angular/material/dialog';
import { DialogOverviewDetailed  } from '../dialog-detailed';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogOverviewDetailed)         
  }

  ngOnInit(): void {
  }

}
