import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'
import { map, Observable, startWith } from 'rxjs';
interface User {
  name: string;
  email: string;

}
@Component({
  selector: 'app-activity-request-form',
  templateUrl: './activity-request-form.component.html',
  styleUrls: ['./activity-request-form.component.css']
})
export class ActivityRequestFormComponent{
 plusUser=faUserPlus
 myControl = new FormControl<string|User>('');

 searchControl = new FormControl();


selectedItem: any;
users: User[] = [
  { name: 'User 1', email: 'u1@example.com' },
  { name: 'User 2', email: 'u2@example.com' },
  { name: 'User 3', email: 'u3@example.com' },

  
];
options: string[] = ['One', 'Two', 'Three'];
delUsers:string[] =['u1','u2','u3']
approver:string[]=["PM1","TL2","PM2"]
selectedDate:Date|null=null;
filteredUsers!: Observable<User[]>;

ngOnInit() {
  this.filteredUsers = this.myControl.valueChanges.pipe(
    startWith(''),
    map(value => (typeof value === 'string' ? value : value?.name)),
    map(name => (name ? this._filter(name) : this.users.slice()))
  );
}

private _filter(name: string): User[] {
  const filterValue = name.toLowerCase();
  return this.users.filter(user => user.name.toLowerCase().includes(filterValue));
}

}
