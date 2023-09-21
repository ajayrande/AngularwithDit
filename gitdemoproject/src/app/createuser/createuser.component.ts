import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit{

  constructor(public cs:UserService,public fb:FormBuilder){}


  userform:FormGroup;

  ngOnInit(): void {
    
   this.userform=this.fb.group({
   

    uname:[],
    uemail:[],
    upass:[]

   })
    
  }

  saveuser(){

    this.cs.saveuser(this.userform.value).subscribe();
  }
}
