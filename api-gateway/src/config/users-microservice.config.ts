import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

// this option is exact as microservice options
export const usersMicroserviceOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'users',
    protoPath: join(__dirname, '../../src/proto/users.proto'),
    url: 'localhost:5001',
  },
};

// this option is client options of microservice
export const usersClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'users',
    protoPath: join(__dirname, '../../src/proto/users.proto'),
    url: 'localhost:5000',
  },
};

export const USERS_PACKAGE = 'USERS_PACKAGE';
