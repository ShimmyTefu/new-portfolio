import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  
  @Output() submitted = new EventEmitter<string>(); 
  contactForm: FormGroup;
  emailPattern = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
  constructor(private api: ApiService, private router: Router,private snackBar: MatSnackBar) {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      cellNumber: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)])
    })
  }
  submit(): void {
    if (this.contactForm.invalid) return;

    let formValue = this.contactForm.value;

    this.api.genericPost('/post-user', formValue)
      .subscribe({
        next: (res: any) => {
          // sessionStorage.setItem('currentUser', JSON.stringify(res));
          this.contactForm.reset();
          console.log(res)
        },
        error: (err: any) => this.snackBar.open(err.error, 'Ok', { duration: 3000 }),
        complete: () => { }
      })
  }
}
