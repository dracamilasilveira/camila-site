import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Age {
  id: number,
  name: string;
  description: Object;
}

@Component({
  selector: 'app-growth-development',
  templateUrl: './growth-development.component.html',
  styleUrls: ['./growth-development.component.css']
})
export class GrowthDevelopmentComponent implements OnInit {
  private sub:any;
  // id:any;
  ageClass:string = "switch-color";
  age:any;
  ages: Array<Age> = [
    { 'id': 0, 'name': '0-3 meses', 'description': {} },
    { 'id': 1, 'name': '4-6 meses', 'description': {} },
    { 'id': 2, 'name': '7-9 meses', 'description': {} },
    { 'id': 3, 'name': '7-9 meses', 'description': {} }
  ]
  urlAges: Object = {
    '0-3meses':0 //...
  }
  
  selectedAge:Age = this.ages[0];

  constructor(private route:ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      // this.id = +params['id'];
      if ('age' in params) {
        this.age = params['age'];
      }
      console.log(params)
   });
  }

  modifyEl(index:number) {
    let my_id = "age" + index;
    let el_id = document.getElementById(my_id);
    if (el_id) {
      console.log("Entrou");
      el_id.setAttribute("style", "color: #F5D1C1; background-color:#81717A");
    }
    this.defaultEl(this.selectedAge.id);
  }

  defaultEl(index:number) {
    let my_id = "age" + index;
    let el_id = document.getElementById(my_id);
    if (el_id) {
      el_id.setAttribute("style", "color: #81717A; background-color:#F5D1C1;");
    }
  }

  selectAge(item:Age) {
    this.modifyEl(item.id);
    this.selectedAge = item;
    console.log(item);
  }

}
