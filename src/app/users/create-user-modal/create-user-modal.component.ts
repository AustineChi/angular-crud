import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserStateService } from '../user-state.service';

@Component({
  templateUrl: './create-user-modal.component.html',
})
export class CreateUserModalComponent implements OnInit {

  userForm: FormGroup;
  constructor(public userState: UserStateService) {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required)
    })
   }

  ngOnInit(): void {
  }


}
