import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthService } from './features/login/login/auth.service';
import {ChangeDetectorRef} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'main-app';
  isLoggedIn: Boolean = false;
  constructor (private ref: ChangeDetectorRef, private authService: AuthService) {


    authService.isLoggedIn.subscribe((isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
     });


    });
  }
}
