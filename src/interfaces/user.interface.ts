export interface IUser {
  id: number | string;
  firstName: string;
  lastName: string;
}

export interface GetUserQueryVariables {
  id: string;
}
