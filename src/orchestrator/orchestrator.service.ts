import { Injectable, OnModuleInit } from '@nestjs/common';
import { Task } from 'src/tasks/interfaces/task.abstract';
import { TaskRegistryService } from 'src/tasks/task-registry/task-registry.service';
import { DependencyResolverService } from './dependency-resolver/dependency-resolver.service';
import { EventBusService } from 'src/events/event-bus/event-bus.service';

@Injectable()
export class OrchestratorService implements OnModuleInit {
    private dependencyMap = new Map<string, string[]>();
    private completedTask = new Set<string>();
    private taskMap = new Map<string, Task>();

    constructor(
        private readonly taskRegistry: TaskRegistryService,
        private readonly eventBus: EventBusService,
        private readonly dependencyResolver: DependencyResolverService
    ) { }

    onModuleInit() {
        const tasks = this.taskRegistry.AllTasks;

        tasks.forEach((task) => {
            this.taskMap.set(task.name, task);
            this.dependencyMap.set(task.name, task.dependencies);
        });

        this.eventBus.on('task_completed', (taskName: string) => {
            this.completedTask.add(taskName);
            this.tryToRunNextTasks();
        });
    }

    startWorkFlow() {
        this.tryToRunNextTasks();
    }

    private tryToRunNextTasks() {
        this.dependencyMap.forEach((dependency, taskName) => {
            if (this.completedTask.has(taskName)) {
                return;
            }

            const isReady = dependency.every((dependency) => this.completedTask.has(dependency));

            if(isReady) {
                const task = this.taskMap.get(taskName);
                if(task) {
                    task.execute().then(() => {
                        this.eventBus.emit('task_completed', task.name);
                    });
                }
            }
        });
    }

}
