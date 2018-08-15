
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  userName: string;
  password: string;
}
@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  private authState: any = null;
  // authState: FirebaseAuthState = null;

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor(
    public af: AngularFireAuth,
    private router: Router

  ) {
    console.log("ASDASDSAD");
    console.log(af);
  }

  login(user: User, type:string) {

    if(type=="phone"){
      firebase.auth().languageCode = 'en';
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': function(response) {
          alert(33);
          var phoneNumber = '+919682504948';
            var appVerifier = window.recaptchaVerifier;
            firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
                .then(function (confirmationResult) {
                  // SMS sent. Prompt user to type the code from the message, then sign the
                  // user in with confirmationResult.confirm(code).
                  window.confirmationResult = confirmationResult;
                }).catch(function (error) {
                  // Error; SMS not sent
                  // ...
                });
        }
      });


    }else{
      firebase.auth().signInWithEmailAndPassword(user.userName, user.password)
      .then(res => {
        console.log("res");
        console.log(res);
        this.authState = res;
        this.loggedIn.next(true);
        this.router.navigate(['/']);
      }, err => {
         console.log("error");
      });
    }



  }

  logout() {
    firebase.auth().signOut().then(function() {
      this.loggedIn.next(false);
      this.router.navigate(['/signout']);
    }).catch(function(error) {
      // An error happened.
    });                 // {4}

  }
}
