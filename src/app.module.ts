import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './car/entities/car.entity';
import { CarModule } from './car/car.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [Car],
      synchronize: true,
    }),
    CarModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
