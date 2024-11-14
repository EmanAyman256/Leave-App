import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
filteredAppr!:Observable<string>
appForm=new FormGroup({
  fullName:new FormControl('',[Validators.required]),
  reqBy:new FormControl('',[Validators.required]),
  activityType:new FormControl('',[Validators.required]),
  duration:new FormControl('',[Validators.required]),
  startDate:new FormControl(Date,[Validators.required]),
  endDate:new FormControl(Date,[Validators.required]),
  module:new FormControl('',[Validators.required]),
  approvers:new FormControl('',Validators.required),
  taskDele:new FormControl('',[Validators.required]),
  attachSickLeave:new FormControl(null,[Validators.required]),
  notes:new FormControl('')
})
ngOnInit() {
  this.filteredUsers = this.myControl.valueChanges.pipe(
    startWith(''),
    map(value => (typeof value === 'string' ? value : value?.name)),
    map(name => (name ? this._filter(name) : this.users.slice())));
}
onSubmit()
{
console.log(this.appForm);

}

private _filter(name: string){
  const filterValue = name.toLowerCase();
  return this.users.filter(user => user.name.toLowerCase().includes(filterValue));
}

}
