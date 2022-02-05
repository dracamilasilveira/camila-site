import { Component, OnInit } from '@angular/core';

interface Link {
  name: string,
  routerLink: string;
}

@Component({
  selector: 'app-growth-development',
  templateUrl: './growth-development.component.html',
  styleUrls: ['./growth-development.component.css']
})
export class GrowthDevelopmentComponent implements OnInit {
  ages: Array<Link> = [
    { 'name': '0-3 meses', 'routerLink': 'marcos-do-desenvolvimento' },
    { 'name': '4-6 meses', 'routerLink': 'paralisia-cerebral' },
    { 'name': '7-9 meses', 'routerLink': 'sobre-mim' },
    { 'name': '7-9 meses', 'routerLink': 'sobre-mim' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
