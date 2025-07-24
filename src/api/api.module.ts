import { Module } from '@nestjs/common';
import { OrchestratorModule } from 'src/orchestrator/orchestrator.module';
import { ApiController } from './api.controller';

@Module({
  imports: [OrchestratorModule],
  controllers: [ApiController]
})
export class ApiModule { }
