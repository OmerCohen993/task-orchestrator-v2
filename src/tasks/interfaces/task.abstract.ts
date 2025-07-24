export abstract class Task {
    abstract name: string;
    abstract dependencies: string[];
    abstract execute(): Promise<void>;
}