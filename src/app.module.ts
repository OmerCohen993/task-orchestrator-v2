import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrchestratorModule } from './orchestrator/orchestrator.module';
import { TaskModule } from './task/task.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [OrchestratorModule, TaskModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
