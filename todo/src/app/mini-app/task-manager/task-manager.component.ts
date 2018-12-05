import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
counter = 0;
score =[25,44,40,60,78]
salary=88;
oneTask="";
myTasks=[];
friends=['hari','azzu','lav','dhanu'];
completedTask=[];
  constructor() { }

  ngOnInit() {
  }
sayHello = function(){
  ++this.counter;
  console.log("button clicked" + this.counter);
  console.log(this.oneTask)
    this.myTasks.push(this.oneTask);
  this.oneTask="";
}

taskDone(ct){
  console.log("index.value:"+ ct);
  const deletedElement= this.myTasks.splice(ct,1);
  this.completedTask.push(deletedElement);
console.log(this.completedTask);
}


}
