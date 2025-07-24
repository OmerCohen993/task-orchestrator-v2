import { Task } from "../interfaces/task.abstract"

export class TaskD extends Task {
    readonly name: string = 'D';
    readonly dependencies: string[] = ['B', 'C'];
    async execute(): Promise<void> {
        console.log(`executing task ${this.name}`)
    }

}