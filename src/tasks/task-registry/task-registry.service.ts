import { Injectable } from '@nestjs/common';
import { Task } from '../interfaces/task.abstract';
import { TaskA } from '../tasks/a.task';
import { TaskB } from '../tasks/b.task';
import { TaskC } from '../tasks/c.task';
import { TaskD } from '../tasks/d.task';


@Injectable()
export class TaskRegistryService {
    private tasks: Map<string, Task> = new Map();

    constructor() {
        const allTasks: Task[] = [
            new TaskA(),
            new TaskB(),
            new TaskC(),
            new TaskD(),
        ];

        allTasks.forEach((task) => {
            this.tasks.set(task.name, task);
        });
    }

    get AllTasks(): Task[] {
        return Array.from(this.tasks.values());
    }

    public getTaskByName(name: string): Task | undefined{
        return this.tasks.get(name);
    }
}
