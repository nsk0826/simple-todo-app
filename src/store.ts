import { combineReducers, createStore } from 'redux';
import { IState } from './states/IState';
import userReducer from './reducers/UserReducer';

const combinedReducers = combineReducers<IState>({
    user: userReducer,
});

export const store = createStore(combinedReducers);

export default store;