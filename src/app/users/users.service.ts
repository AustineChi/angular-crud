import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { IcreateUser, IcreateUserResp, IupdateUserResp, IuserByIdResp, IuserListResponse } from './users.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private HttpService: HttpService) {}

  getUsers(pageNumber: number) {
    const apiUrl = 'users';
    return this.HttpService.getRequest<IuserListResponse>(apiUrl, { pageNumber });
  }

  getUserById(userId: number) {
    const apiUrl = `users/${userId}`;
    return this.HttpService.getRequest<IuserByIdResp>(apiUrl);
  }

 deleteUser(userId: number) {
    const apiUrl = `users/${userId}`;
    return this.HttpService.deleteRequest(apiUrl);
  }

  createUser(payload: IcreateUser) {
    const apiUrl = `users`;
    return this.HttpService.postRequest<IcreateUserResp>(apiUrl, payload);
  }

  updateUser(payload: IcreateUser) {
    const apiUrl = `users`;
    return this.HttpService.updateRequest<IupdateUserResp>(apiUrl, payload);
  }

}

