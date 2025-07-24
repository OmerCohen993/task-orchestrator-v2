import { Controller, Post } from '@nestjs/common';
import { OrchestratorService } from 'src/orchestrator/orchestrator.service';

@Controller('workflow')
export class ApiController {
    constructor(private readonly orchestratorService: OrchestratorService) { }

    // TODO: return value
    @Post('start')
    startWorkFlow() {
        this.orchestratorService.startWorkFlow();
        return { message: 'Workflow started' };
    }
}
