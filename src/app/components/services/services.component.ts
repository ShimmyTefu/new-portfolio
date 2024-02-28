import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  image = [{
    src: "../../../assets/images/img1.png",
    title: 'Web Designer'
  }, {
    src: "../../../assets/images/img2.png",
    title: "Web Developer"
  }, {
    src: "../../../assets/images/img3.png",
    title: "Software Developer"
  }]
}
