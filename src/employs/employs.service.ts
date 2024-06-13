import { Injectable } from '@nestjs/common';
import { CreateEmployDto } from './dto/create-employ.dto';
import { UpdateEmployDto } from './dto/update-employ.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmploysService {
  constructor(private prisma: PrismaService){}
  
  create(createEmployDto: CreateEmployDto) {
    return 'This action adds a new employ';
    return this.prisma.employ.create({data: createEmployDto});
  }

  findAll() {
    return `This action returns all employs`;
    return this.prisma.employ.findMany({where:{register: false}});
  
  }

  findExtinct (){
    return this.prisma.employ.findMany({where: {register: true}});
  }

  findOne(id: number) {
    return `This action returns a #${id} employ`;
 return this.prisma.employ.findUnique({where: {id}});
  }

  update(id: number, updateEmployDto: UpdateEmployDto) {
    return `This action updates a #${id} employ`;
  return this.prisma.employ.update({
    where: {id},
    data: updateEmployDto,
  });
  }

  remove(id: number) {
    return `This action removes a #${id} employ`;
  return this.prisma.article.Delete({where:{id}});
  }
}
