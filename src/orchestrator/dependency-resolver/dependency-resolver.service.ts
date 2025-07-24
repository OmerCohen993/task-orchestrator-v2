import { Injectable } from '@nestjs/common';
import { error } from 'console';
import { Task } from 'src/tasks/interfaces/task.abstract';

@Injectable()
export class DependencyResolverService {
    resolve(tasks: Task[]): string[] {
        const sorted: string[] = [];
        const visited = new Set<string>();
        const taskMap = new Map<string, Task>();

        tasks.forEach((task) => taskMap.set(task.name, task));

        const visit = (taskName: string, temp: Set<string>) => {
            if (visited.has(taskName)) {
                return;
            }

            if (temp.has(taskName)) {
                throw new Error(`Circular dependency detected at task: ${taskName}`);
            }

            temp.add(taskName);

            const task = taskMap.get(taskName);
            if (!task) throw new Error(`Task ${taskName} not found`);

            task.dependencies.forEach((dependency) => visit(dependency, temp));

            temp.delete(taskName);
            visited.add(taskName);
            sorted.push(taskName);
        };

        tasks.forEach((task) => visit(task.name, new Set()));

        return sorted;
    }
}
