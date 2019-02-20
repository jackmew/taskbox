import { combineReducers } from 'redux';
import tasks from '../screens/Taskbox/reducer';
import count from '../screens/Counter/reducer';

export default combineReducers({
    tasks,
    count
})

