import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { provideRoutes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FilterAppModule } from './features/filters/filter.app.module';
import { AppRoutModule } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { FilterAppRoutingModule } from './features/filters/shared/filter.routing';
import { MatXAppModule } from './features/mat/mat.module';

import {
  MatAutocompleteModule,

  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,

  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { LoginComponent, WindowService } from './features/login/login/login.component';
import { AuthService } from './features/login/login/auth.service';
import { SignupComponent } from './features/login/signup/signup.component';
import { OthersigninsComponent } from './features/login/signup/others/othersignins/othersignins.component';
import { PhoneloginComponent } from './features/login/signup/others/phonelogin/phonelogin.component';

@Component({
  selector: 'app-rt',
  template: ` this is RTapp- now route to your respective section
   `
})
 class RootAppDemoComponent {
  title = 'main-app';
}
@Component({
  selector: 'app-rt2',
  template: ` this is RTapp222- now route to your respective section
   `
})
 class RootAppDemo2Component {
  title = 'ddd-app';


}

const routes: Routes = [
  { path: 'login', pathMatch: 'full', component: LoginComponent},
  { path: '', pathMatch: 'full', redirectTo: 'rt'},
  { path: 'rt', pathMatch: 'full', component: RootAppDemoComponent },

  { path: 'rt2', pathMatch: 'full', component: RootAppDemo2Component},
  { path: 'signup', pathMatch: 'full', component: SignupComponent},
  { path: 'phonesignup', pathMatch: 'full', component: PhoneloginComponent}






];

export const environment = {
  production: false,
  firebase: {
     apiKey: "AIzaSyCq1ElvUHA5sFKKfQYSm4y1mZ_AjfBlu2I",
     authDomain: "sportit-55a7c.firebaseapp.com",
     databaseURL: "https://sportit-55a7c.firebaseio.com",
     projectId: "sportit-55a7c",
     storageBucket: "sportit-55a7c.appspot.com",
     messagingSenderId: "502977040146"
  }
};
@NgModule({

  declarations: [AppComponent,  RootAppDemoComponent, RootAppDemo2Component, LoginComponent, SignupComponent, OthersigninsComponent, PhoneloginComponent],
  imports: [
    BrowserModule,
     AngularFireModule.initializeApp(environment.firebase),
     AngularFirestoreModule, // imports firebase/firestore, only needed for database features
     AngularFireAuthModule, // imports firebase/auth, only needed for auth features
      MatToolbarModule,
      FormsModule, ReactiveFormsModule,
      BrowserAnimationsModule,
      MatAutocompleteModule,
      MatBadgeModule,
      MatBottomSheetModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatStepperModule,
      MatDatepickerModule,
      MatDialogModule,
      MatDividerModule,
      MatExpansionModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatNativeDateModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      MatSelectModule,
      MatSidenavModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatSnackBarModule,
      MatSortModule,
      MatTableModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule,
      MatTreeModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    FilterAppModule,
    MatXAppModule

  ],
  exports:  [RouterModule],
  providers: [AuthService, WindowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
