import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserStateService } from '../user-state.service';

@Component({
  templateUrl: './create-user-modal.component.html',
  styleUrls: ['./create-user-modal.component.scss'],
})
export class CreateUserModalComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;

  constructor(public userState: UserStateService) {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }
    this.userState.createUser(this.userForm.value);
  }

  onReset(): void {
    this.submitted = false;
    this.userForm.reset();
  }

  ngOnInit(): void {}
}
