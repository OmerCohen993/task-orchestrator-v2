import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskRegistryService } from './task-registry/task-registry.service';

@Module({
  providers: [TaskService, TaskRegistryService]
})
export class TaskModule {}
