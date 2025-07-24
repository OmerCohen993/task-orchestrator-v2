import { Task } from "../interfaces/task.abstract"

export class TaskA extends Task {
    readonly name: string = 'A';
    readonly dependencies: string[] = [];
    async execute(): Promise<void> {
        console.log(`executing task ${this.name}`)
    }

}