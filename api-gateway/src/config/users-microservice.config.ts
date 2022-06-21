import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const usersMicroserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'users',
    protoPath: join(__dirname, '../../src/proto/users.proto'),
    url: 'localhost:6001',
  },
};

export const USERS_PACKAGE = 'USERS_PACKAGE';
