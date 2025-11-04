import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); // áp dụng cho toàn bộ routes
  }
}
