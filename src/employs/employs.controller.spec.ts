import { Test, TestingModule } from '@nestjs/testing';
import { EmploysController } from './employs.controller';
import { EmploysService } from './employs.service';

describe('EmploysController', () => {
  let controller: EmploysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmploysController],
      providers: [EmploysService],
    }).compile();

    controller = module.get<EmploysController>(EmploysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
