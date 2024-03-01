import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  pages = [{route:"home"},{route:"about"},{route:"services"},{route:"work"}]
  scrollTo(id: any) {
    const element = document.getElementById(id);
    element?.scrollIntoView({behavior: 'smooth'})
  }

  constructor(private route:Router) {
    // console.log(`Running on '${environment.name}' environment...`)
  }
}
