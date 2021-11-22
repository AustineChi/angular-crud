export interface IuserListResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: ISingleUser[];
  support?: any;
}

export interface ISingleUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IcreateUser {
  name: string;
  job: string;
}

export interface IcreateUserResp {
  name: string;
  job: string;
  id: string;
  createdAt: string;
}

export interface IupdateUserResp {
  name: string;
  job: string;
  updatedAt: string;
}

export interface IuserByIdResp {
  data: ISingleUser;
  support: {
    url: string;
    text: string;
  };
}
