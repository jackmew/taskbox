const actionTypes = {
    archiveTask: 'TASK_ARCHIVED',
    pinTask: 'TASK_PINNED',
    inboxTask: 'TASK_INBOX'
};

export const archiveTask = id => {
    console.log(`archiveTask: ${id}`);
    return {
        type: actionTypes.archiveTask, id
    }
}
export const pinTask = id => {
    console.log(`pinTask: ${id}`);
    return {
        type: actionTypes.pinTask, id
    }
};

export default actionTypes
