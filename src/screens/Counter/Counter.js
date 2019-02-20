// @flow
import * as React from 'react';
import type { Notification } from './actions';
import {showNotification} from "./actions";

type Props = {
    counter: {
        count: number,
        notification: Notification
    },
    decrement: Function,
    increment: Function,
    showNotification: Function,
    hideNotification: Function
}

export default class Counter extends React.PureComponent<Props> {
    login = () => {
        this.props.showNotification('You logged in.');
        setTimeout(() => {
            this.props.hideNotification()
        }, 1000)
    }
    render() {
        return (
            <div>
                <button
                    type="button"
                    onClick={this.props.decrement}
                >{'-'}</button>
                <span>{this.props.counter.count}</span>
                <button
                    type="button"
                    onClick={this.props.increment}
                >{'+'}</button>
                <button
                    type="button"
                    onClick={this.login}
                >{'Login'}</button>
                { this.props.counter.notification.isShow && <span>{this.props.counter.notification.text}</span>}
            </div>
        )
    }
}
