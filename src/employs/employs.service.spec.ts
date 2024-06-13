import { Test, TestingModule } from '@nestjs/testing';
import { EmploysService } from './employs.service';

describe('EmploysService', () => {
  let service: EmploysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmploysService],
    }).compile();

    service = module.get<EmploysService>(EmploysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
