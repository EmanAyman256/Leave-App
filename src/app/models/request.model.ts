export interface requestData{
  fullName: string;
  requestedBy: string [];
  email:string
  activityType: string;
  duration: number;
  startDate: Date;
  dueDate:Date;
  module: string;
  approvers: string[] ;
  delegatedTasks?: string,
  notes?: string
}
