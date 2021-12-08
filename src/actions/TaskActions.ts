import moment from 'moment';
import { Dispatch } from 'redux';
import { actionCreatorFactory } from 'typescript-fsa';
import { ITask } from '../states/ITask';

const actionCreator = actionCreatorFactory('task-actions');

export const showTaskListAction = actionCreator<ITask[]>('show-task-list');

export const addTaskAction = actionCreator<ITask>('add');

export const toggleCompleteAction = actionCreator<string>('toggle-complete');

export const deleteTaskAction = actionCreator<string>('delete');

const dummyTasks: ITask[] = [
    {
        complete: false,
        deadline: moment().add(1, 'day').toDate(),
        id: '0',
        taskName: 'task01',
    },
    {
        complete: true,
        deadline: moment().add(1, 'day').toDate(),
        id: '1',
        taskName: 'task02',
    },
    {
        complete: false,
        deadline: moment().add(-1, 'day').toDate(),
        id: '2',
        taskName: 'task03',
    },
    {
        complete: true,
        deadline: moment().add(-1, 'day').toDate(),
        id:'3',
        taskName: 'task04',
    },
];

export const getTaskList = (dispatch: Dispatch): void => {
    dispatch(showTaskListAction(dummyTasks));
};