import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './car/entities/car.entity';
import { CarModule } from './car/car.module';

@Module({

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
