import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  
  createUserForm: FormGroup;
  private sub: any;
  constructor(
    private formBuilder: FormBuilder,
    private userService:ServiceService
  ) {
  
    this.createUserForm = formBuilder.group({     
      FirstName: ["", Validators.required],
      LastName: ["", Validators.required]
    });
  }

  ngOnInit() {
  }

  SaveUser()
  { 
      this.createUser();    
  }

  createUser() {
    if (this.createUserForm.valid) {
      this.userService.postData(this.createUserForm.value).subscribe(data=>{
        this.createUserForm.reset();
        alert('User Details Added Successfully.');
      }, error => console.error(error))

    } else {

    }
  }

ngOnDestroy() {
  this.sub.unsubscribe();
}


}
