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
import { ErrorTempComponent } from './shared/error-temp/error-temp.component';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    AppComponent,
    ActivityRequestFormComponent,
    ErrorTempComponent,
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
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
