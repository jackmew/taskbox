import actions from './actions'
const initialState = [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
]
const tasks = (state = initialState, action) => {
    switch (action.type) {
        case actions.archiveTask:
            return state.map(task => (task.id === action.id ? { ...task, state: action.type } : task));
        case actions.pinTask:
            return state.map(task => {
                if (task.id === action.id) {
                    return { ...task, state: action.type }
                } else {
                    return task;
                }
            });
        default:
            return state;
    }
};
export default tasks;
