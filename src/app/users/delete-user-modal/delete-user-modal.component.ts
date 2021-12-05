import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserStateService } from '../user-state.service';
import { ISingleUser } from '../user.interface';

@Component({
  templateUrl: './delete-user-modal.component.html',
})
export class DeleteUserModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ISingleUser, public userState: UserStateService){ }

  ngOnInit(): void {
  }

  deleteUser(){
    this.userState.deleteUser(this.data.id)
  }
}
