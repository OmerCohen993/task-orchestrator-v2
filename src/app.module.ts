import { Module } from '@nestjs/common';
import { OrchestratorModule } from './orchestrator/orchestrator.module';
import { TaskModule } from './tasks/task.module';
import { ApiModule } from './api/api.module';
import { EventsModule } from './events/events.module';


@Module({
  imports: [
    OrchestratorModule,
    TaskModule,
    ApiModule,
    EventsModule
  ],
})
export class AppModule { }