import { PartialType } from '@nestjs/swagger';
import { CreateEmployDto } from './create-employ.dto';

export class UpdateEmployDto extends PartialType(CreateEmployDto) {}
