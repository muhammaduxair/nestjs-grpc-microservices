import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { UsersController } from './users.controller';
import { usersClientOptions, USERS_PACKAGE } from 'src/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: USERS_PACKAGE,
        ...usersClientOptions,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [],
})
export class UsersModule {}
