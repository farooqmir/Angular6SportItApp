import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { WindowService } from '../../../login/login.component';

@Component ({
  selector: 'app-phonelogin',
  templateUrl: './phonelogin.component.html',
  styleUrls: ['./phonelogin.component.scss']
})
export class PhoneloginComponent implements OnInit {
  windowRef: any;
  form: FormGroup;                     // {1}
  private formSubmitAttempt: boolean; // {2}
  verificationCode: string;

  constructor(private fb: FormBuilder, public win: WindowService) { }

  ngOnInit() {
    this.form = this.fb.group({     // {5}
      phone: ['', Validators.required]
    });
    this.windowRef = this.win.windowRef();
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')

    this.windowRef.recaptchaVerifier.render();
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }
  onSubmit() {

                // {8}
  }
  sendLoginCode() {
    if (this.form.valid) {
      const appVerifier = this.windowRef.recaptchaVerifier;

      const num = this.form.value.phone;//"+91 968 250 4948";
      alert(num);
      firebase.auth().signInWithPhoneNumber(num, appVerifier)
              .then(result => {
                  console.log("Phone Signed In");
                  console.log(result);
                  this.windowRef.confirmationResult = result;

              })
              .catch( error => console.log(error) );
    } else {
      this.formSubmitAttempt = true;
    }


  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {

                    this.user = result.user;

    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }
}
