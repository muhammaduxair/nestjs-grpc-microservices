import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';

export interface UsersMicroservice {
  getOne(
    param: IUserById,
    metadata?: Metadata,
    call?: ServerUnaryCall<any, any>,
  ): Promise<IUser>;

  getAll(
    param: {},
    metadata?: Metadata,
    call?: ServerUnaryCall<any, any>,
  ): Promise<IUsers>;
}

export interface IUserById {
  id: number;
}

export interface IUser {
  id: number;
  fullName: string;
  email: string;
  adress: string;
}

export interface IUsers {
  users: IUser[];
}
