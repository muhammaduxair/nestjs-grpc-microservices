import { Controller, Get, Param } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { usersMicroserviceOptions } from '../config';
import { IUser, IUsers, UsersMicroservice } from './users.interface';

@Controller('users')
export class UsersController {
  @Client(usersMicroserviceOptions)
  private readonly usersClient: ClientGrpc;

  private usersMicroservice: UsersMicroservice;

  constructor() {}

  onModuleInit() {
    this.usersMicroservice =
      this.usersClient.getService<UsersMicroservice>('UsersMicroservice');
  }

  @Get()
  async getAllUsers(): Promise<IUsers> {
    return this.usersMicroservice.getAll({});
  }

  @Get(':id')
  getUserById(@Param('id') id: number): Promise<IUser> {
    return this.usersMicroservice.getOne({ id: Number(id) });
  }
}
