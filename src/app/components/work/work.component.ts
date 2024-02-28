import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  image= [{
    src: "../../../assets/images/pic-1.jpg"
  }, {
    src: "../../../assets/images/pic-2.jpg"
  }, {
    src: "../../../assets/images/pic-3.jpg"
  }, {
    src: "../../../assets/images/pic-4.jpg"
  }, {
    src: "../../../assets/images/pic-5.jpg"
  }]
}
