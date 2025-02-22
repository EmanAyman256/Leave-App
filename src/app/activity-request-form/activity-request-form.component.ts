import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'
import { MessageService } from 'primeng/api';
import { map, Observable, startWith } from 'rxjs';
import { APIService } from '../services/api.service';
import { Router } from '@angular/router';
interface User {
  name: string;
  email: string;

}
@Component({
  selector: 'app-activity-request-form',
  templateUrl: './activity-request-form.component.html',
  styleUrls: ['./activity-request-form.component.css'],
  providers:[MessageService]
})
export class ActivityRequestFormComponent{
plusUser=faUserPlus
myControl = new FormControl<string|User>('');
searchControl = new FormControl();
selectedItem: any;
Startvalue!:Date;
users: User[] = [
  { name: 'User 1', email: 'u1@example.com' },
  { name: 'User 2', email: 'u2@example.com' },
  { name: 'User 3', email: 'u3@example.com' },
];
options: string[] = ['One', 'Two', 'Three'];
delUsers:string[] =['u1','u2','u3']
approver:string[]=["PM1","TL2","PM2"]
activities:string[]=
['WFH','Extra WFH'
  ,'Customer Visit','Sick Leave'
  ,'Annual Vacation','Emergency Leave',
'Marriage Leave','Maternity Leave',
'Bereavement Leave','Omra Leave',
'Haj Leave'
]
appForm=new FormGroup({
  fullName:new FormControl('',[Validators.required]),
  reqBy:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required]),
  activityType:new FormControl('',[Validators.required]),
  duration:new FormControl('',[Validators.required]),
  startDate:new FormControl( Date,[Validators.required]),
  endDate:new FormControl( Date,[Validators.required]),
  module:new FormControl('',[Validators.required]),
  approvers:new FormControl('',Validators.required),
  taskDele:new FormControl(''),
  attachSickLeave:new FormControl(null),
  notes:new FormControl('')
})
constructor(private messageService: MessageService, private api:APIService,private router:Router) {}
onSubmit()
{
  if(this.appForm.valid)
  {
    this.api.addData(this.appForm.value)
    .then(() => 
    {
      console.log('Data added!')
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Request is Sent Successfully' });
       this.router.navigate(['/success'])
      this.appForm.reset()

    }
    )
    .catch((error) => console.error('Error: ', error));
  }
  else
  {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Request is Failed to Sent' });

  }
}


}
