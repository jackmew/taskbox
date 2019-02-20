import React from 'react';
import PropTypes from 'prop-types';

import actionTypes from './actions'
import Task from './Task';

export default class Taskbox extends React.PureComponent {

    render() {
        const {
            props: {
                tasks,
                onPinTask,
                onArchiveTask
            }
        } = this;

        const events = {
            onPinTask,
            onArchiveTask,
        };

        const tasksInOrder = [
            ...tasks.filter(t => t.state === actionTypes.pinTask),
            ...tasks.filter(t => t.state !== actionTypes.pinTask),
        ];
        return (
            <div className="list-items">
                {tasksInOrder.map(task => <Task key={task.id} task={task} {...events} />)}
            </div>
        );
    }
}
