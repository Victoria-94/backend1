import { Module } from '@nestjs/common';
import { EmploysService } from './employs.service';
import { EmploysController } from './employs.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [EmploysController],
  providers: [EmploysService],
  imports:[PrismaModule],
})
export class EmploysModule {}
