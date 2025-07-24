import { Module } from '@nestjs/common';
import { OrchestratorService } from './orchestrator.service';
import { DependencyResolverService } from './dependency-resolver/dependency-resolver.service';
import { TaskRegistryService } from 'src/tasks/task-registry/task-registry.service';
import { EventBusService } from 'src/events/event-bus/event-bus.service';


@Module({
  providers: [
    OrchestratorService,
    DependencyResolverService,
    TaskRegistryService,
    EventBusService,
  ],
  exports: [OrchestratorService],
})
export class OrchestratorModule {}