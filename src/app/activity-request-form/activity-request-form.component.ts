import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-activity-request-form',
  templateUrl: './activity-request-form.component.html',
  styleUrls: ['./activity-request-form.component.css']
})
export class ActivityRequestFormComponent{
 plusUser=faUserPlus
 myControl = new FormControl('');

 searchControl = new FormControl();
 items = [
  { id: 1, name: 'Option 1' },
  { id: 2, name: 'Option 2' },
  { id: 3, name: 'Option 3' },
  // more items...
];

selectedItem: any;

constructor() { }

}
