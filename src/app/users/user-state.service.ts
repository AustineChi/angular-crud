import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CreateUserModalComponent } from './create-user-modal/create-user-modal.component';
import { DeleteUserModalComponent } from './delete-user-modal/delete-user-modal.component';
import { IcreateUser, ISingleUser, IuserListResponse } from './user.interface';
import { UserService } from './users.service';

export interface userState {
  loading: boolean;
  error: boolean;
  userData: IuserListResponse;
  singleUser?: ISingleUser;
}

const initialState: userState = {
  loading: false,
  error: false,
  userData: {} as IuserListResponse,
};

@Injectable({
  providedIn: 'root',
})
export class UserStateService {
  state = new BehaviorSubject<userState>(initialState);
  dialogRef!: MatDialogRef<any>;
  constructor(
    private api: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog
  ) {}

  public getUsers(page: number = 1) {
    this.loading();
    this.api.getUsers(page).subscribe(
      (response: any) => {
        this.state.next({
          ...this.state.getValue(),
          userData: response,
          loading: false,
        });
      },
      (errorResp: any) => {
        this.snackBar.open(errorResp.error.error, 'close'), this.loading();
      }
    );
  }

  public getUserById(userId: number){
    this.loading();
    this.api.getUserById(userId).subscribe(
      (response: any) => {
        this.state.next({
          ...this.state.getValue(),
          singleUser: response.data,
          loading: false,
        });
      },
      (errorResp: any) => {
        this.snackBar.open(errorResp.error.error, 'close'), this.loading();
      }
    );
  }

  public updateUser(payload: IcreateUser) {
    this.loading();
    this.api.createUser(payload).subscribe(
      (response: any) => {
        this.loading();
        this.router.navigate(['dashboard'])
        this.snackBar.open(`You Succesfully Creared ${response.name}`, 'close');
      },
      (errorResp: any) => this.snackBar.open(errorResp.error.error, 'close')
    );
  }

  public createUser(payload: IcreateUser) {
    this.loading();
    this.api.createUser(payload).subscribe(
      (response: any) => {
        this.loading();
        this.dialogRef.close();
        this.snackBar.open(`You Succesfully Creared ${response.name}`, 'close');
      },
      (errorResp: any) => this.snackBar.open(errorResp.error.error, 'close')
    );
  }

  public deleteUser(userId: number) {
    this.loading();
    this.api.deleteUser(userId).subscribe(
      (response: null) => {
        this.loading();
        this.dialogRef.close();
        this.getUsers()
        this.snackBar.open('User Deleted Succesfully', 'close');
      },
      (errorResp: any) => this.snackBar.open(errorResp.error.error, 'close')
    );
  }

  public openCreateModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '450px',
    this.dialogRef = this.dialog.open(CreateUserModalComponent, dialogConfig);
  }

  public openDeleteModal(user: ISingleUser) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = user;
    dialogConfig.width = '450px',
    this.dialogRef = this.dialog.open(DeleteUserModalComponent, dialogConfig);
  }

  private loading() {
    const state = this.state.getValue();
    this.state.next({
      ...state,
      loading: !state.loading,
    });
  }
}
