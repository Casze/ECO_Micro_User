import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule,
  {
      transport: Transport.GRPC,
      options: {
        url:"0.0.0.0:50051",
        package: 'user',
        protoPath: join('node_modules/microservicios/proto/users.proto')
      }
  }
  );
  await app.listen();
}
bootstrap();
