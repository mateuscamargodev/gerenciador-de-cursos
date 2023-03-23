import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  exibeDropdown() {
    let dropdown: HTMLElement = <HTMLElement>document.querySelector('.dropdown-menu');
    if(dropdown.classList.contains('invisivel')){
      dropdown.classList.remove('invisivel');
      dropdown.classList.add('visivel');
    }else{
      dropdown.classList.remove('visivel');
      dropdown.classList.add('invisivel');
    }
  }
}
