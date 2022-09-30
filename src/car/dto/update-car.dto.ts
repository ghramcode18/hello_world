import { PartialType } from '@nestjs/mapped-types';
import { CreateCarDto } from './create-car.dto';

export class UpdateCarDto extends PartialType(CreateCarDto) {
  id: number;
  name: string;
  type: string;
  isSale: boolean;
}
