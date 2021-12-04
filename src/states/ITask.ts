export interface ITask {
    complete: boolean;
    deadline: Date;
    id: string;
    taskName: string;
}

export interface ITaskList {
    tasks: ITask[];
}