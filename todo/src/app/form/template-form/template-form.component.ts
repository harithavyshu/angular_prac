import { RestApiUserServiceService } from './../../services/rest-api-user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
myForm:any
  constructor(private userService:RestApiUserServiceService) { }

  ngOnInit() {
  }
addFormUser(User){

  console.log(User);
  this.userService.createUser(User).subscribe((response)=>console.log(response));
}
}
