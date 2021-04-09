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

  toWpp() {
        //window.location.replace("https://aol.imedicina.com.br/#/event/24754/1137935");
        window.open("https://api.whatsapp.com/send?phone=5519984426298", '_blank');
  }

  ngOnInit(): void {
  }

}
