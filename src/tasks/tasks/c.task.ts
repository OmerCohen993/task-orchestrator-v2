import { Task } from "../interfaces/task.abstract"

export class TaskC extends Task {
    readonly name: string = 'C';
    readonly dependencies: string[] = ['A'];
    async execute(): Promise<void> {
        console.log(`executing task ${this.name}`)
    }

}