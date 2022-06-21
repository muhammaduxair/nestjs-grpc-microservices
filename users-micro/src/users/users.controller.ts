import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { IUser, IUserById } from './users.interface';

@Controller('users')
export class UsersController {
  usersList: IUser[] = [
    {
      id: 1,
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      adress: 'Street 321 Bethelem Pensyllvenia',
    },
    {
      id: 2,
      fullName: 'John Smith',
      email: 'john.Smith@example.com',
      adress: 'Street 565 Houston Texas',
    },
  ];

  constructor() {}

  @GrpcMethod('UsersMicroservice', 'GetAll')
  getAll(metadata: any): { users: IUser[] } {
    console.log('Running');
    return { users: this.usersList };
  }

  @GrpcMethod('UsersMicroservice', 'GetOne')
  getOne(param: IUserById, metadata: any): IUser {
    const user = this.usersList.find((x) => x.id === param.id);
    return user ? user : null;
  }
}
