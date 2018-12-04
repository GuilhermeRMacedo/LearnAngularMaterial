import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  signInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    datePicker: new FormControl('', [Validators.required]),
  })

  onSubmit(f) {
    console.log(f);
  }

  getErrorMessageEmail() {
    return this.signInForm.get('email').hasError('required') ? 'You must enter a value' :
        this.signInForm.get('email').hasError('email') ? 'Not a valid email' :
            '';
  }

  getErrorMessagePassword() {
    return this.signInForm.get('password').hasError('required') ? 'You must enter a value' : false;
  }

  getErrorMessageDatePicker() {
    return this.signInForm.get('datePicker').hasError('required') ? 'You must enter a date' : false;
  }

}
