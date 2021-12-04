import { combineReducers, createStore } from 'redux';
import { IState } from './states/IState';
import taskReducer from './reducers/TaskReducer';

const combinedReducers = combineReducers<IState>({
    taskList: taskReducer,
});

export const store = createStore(combinedReducers);

export default store;