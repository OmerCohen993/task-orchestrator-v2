import { Test, TestingModule } from '@nestjs/testing';
import { TaskRegistryService } from './task-registry.service';

describe('TaskRegistryService', () => {
  let service: TaskRegistryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskRegistryService],
    }).compile();

    service = module.get<TaskRegistryService>(TaskRegistryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
