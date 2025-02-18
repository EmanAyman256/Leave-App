import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityRequestFormComponent } from './activity-request-form/activity-request-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { AsyncPipe, NgFor } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { NgSelectModule } from '@ng-select/ng-select';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { ActivityDesriptionComponent } from './activity-desription/activity-desription.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from './environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { SuccessSubmitComponent } from './success-submit/success-submit.component';



@NgModule({
  declarations: [
    AppComponent,
    ActivityRequestFormComponent,
    ActivityDesriptionComponent,
    SuccessSubmitComponent,
  ],
  imports: [
    BrowserModule,
    ToastModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    MatIconModule,
    InputTextareaModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatMenuModule,
    NgFor,
    MatSelectModule,
    CalendarModule,
    NgSelectModule,
    BrowserAnimationsModule,
    AsyncPipe,
    MatAutocompleteModule,
    MatInputModule,
    MatChipsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase), // Initialize Firebase
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  {

 }
     