import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmploysService } from './employs.service';
import { CreateEmployDto } from './dto/create-employ.dto';
import { UpdateEmployDto } from './dto/update-employ.dto';
import { get } from 'http';
import { ApiTags } from '@nestjs/swagger';

@Controller('employs')
@ApiTags('employ')
export class EmploysController {
  constructor(private readonly employsService: EmploysService) {}

  @Post()
  create(@Body() createEmployDto: CreateEmployDto) {
    return this.employsService.create(createEmployDto);
  }

  @Get()
  findAll() {
    return this.employsService.findAll();
  }
@Get ('extinct')
findExtinct(){
  return this.employsService.findExtinct();
}
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployDto: UpdateEmployDto) {
    return this.employsService.update(+id, updateEmployDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employsService.remove(+id);
  }
}
