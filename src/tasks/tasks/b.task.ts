import { Task } from "../interfaces/task.abstract"

export class TaskB extends Task {
    readonly name: string = 'B';
    readonly dependencies: string[] = ['A'];
    async execute(): Promise<void> {
        console.log(`executing task ${this.name}`)
    }

}