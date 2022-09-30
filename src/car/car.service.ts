import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { Repository } from 'typeorm';
import { UpdateCarDto } from './dto/update-car.dto';
import { CreateCarDto } from './dto/create-car.dto';
@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private usersRepository: Repository<Car>,
  ) {}

  findAll(): Promise<Car[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Car> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
  async update(id: number, updateCarDto: UpdateCarDto) {
    await this.usersRepository.update(id, updateCarDto);
    return this.findOne(id);
  }
  create(createCarDto: CreateCarDto) {
    return this.usersRepository.save(this.usersRepository.create(createCarDto));
  }
}
