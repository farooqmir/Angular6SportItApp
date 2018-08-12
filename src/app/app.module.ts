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
import { LoginComponent } from './features/login/login/login.component';
import { AuthService } from './features/login/login/auth.service';

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

  { path: 'rt2', pathMatch: 'full', component: RootAppDemo2Component}





];

@NgModule({

  declarations: [AppComponent,  RootAppDemoComponent, RootAppDemo2Component, LoginComponent],
  imports: [
    BrowserModule,
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
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
