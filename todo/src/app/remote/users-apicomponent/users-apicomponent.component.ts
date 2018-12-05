import { RestApiUserServiceService } from './../../services/rest-api-user-service.service';
import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-users-apicomponent',
  templateUrl: './users-apicomponent.component.html',
  styleUrls: ['./users-apicomponent.component.css']
})
export class UsersAPIComponentComponent implements OnInit {
  allUsers: any
  constructor(private UserService: RestApiUserServiceService,private router:Router) { }

  ngOnInit() {
    this.getAPIData()
    
  }
  getAPIData() {
    this.UserService.getRemoteUsers().subscribe((data) =>{
      this.allUsers = data;
      console.log("texting");
      console.log(this.allUsers)
      console.log(this.allUsers.length)
    })
  }
  user = {
    "name": "haritha",
    "email": "muthyalaharitha427@gmail.com",
    "address": {
      "geo": {
        "lat": "88.88",
        "lng": "88.88"
      }
    }
  }
  postUser=function() {
    this.UserService.createUser(this.user).subscribe((response) => {
      console.log(response);
      this.UserService.getRemoteUsers().subscribe((data) => {
        this.allUsers = data;
      })
    })
  }

  removeUser=function(id) {
    this.UserService.deleteUser(id).subscribe((response) => {
      console.log(response);
       this.UserService.getRemoteUsers().subscribe((data) => {
        this.allUsers = data;
       })
    })
  }

  viewDetail=function(id){

   console.log(id)
  this.router.navigate(["remoteData",id]);
  }
} 