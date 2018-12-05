import { RestApiUserServiceService } from './../../services/rest-api-user-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  activePath: any
  constructor(private active: ActivatedRoute, private userService: RestApiUserServiceService) { }
  selectedUser: any
  ngOnInit() {
    this.activePath = this.active.snapshot.paramMap.get("id")
    console.log(this.activePath)
    this.getUser(this.activePath)
  }
  getUser(id) {
    this.userService.getOneUser(id).subscribe((ohmygod)=>{
      this.selectedUser=ohmygod;
    })
    }
}
