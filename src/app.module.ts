import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { \[car\]Module } from './[car/]/[car/].module';
import { CarModule } from './car/car.module';

@Module({
  imports: [\[car\]Module, CarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
