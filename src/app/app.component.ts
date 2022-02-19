import { Component } from '@angular/core';


interface Link {
  name: string,
  routerLink: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  title = 'camila-site';
  
  links: Array<Link> = [
    { 'name': 'Início', 'routerLink': '' },
    /* { 'name': 'Marcos do desenvolvimento', 'routerLink': 'marcos-do-desenvolvimento' }, */
    /* { 'name': 'Paralisia Cerebral', 'routerLink': 'paralisia-cerebral' }, */
    /* { 'name': 'Sobre mim', 'routerLink': 'sobre-mim' } */
  ]

  ages: Array<Link> = [
    { 'name': '0-3 meses', 'routerLink': 'marcos-do-desenvolvimento' },
    { 'name': '4-6 meses', 'routerLink': 'paralisia-cerebral' },
    { 'name': '7-9 meses', 'routerLink': 'sobre-mim' }
  ]
}
