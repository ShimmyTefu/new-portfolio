import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  personalDetails = [{
    name: 'Ntshimane Tefu',
    age: 26,
    gender:'Male'
  }]

}

