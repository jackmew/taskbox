import { combineReducers } from 'redux';
import tasks from '../screens/Taskbox/reducer';
import counter from '../screens/Counter/reducer';

export default combineReducers({
    tasks,
    counter
})

