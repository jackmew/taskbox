// @flow
import * as React from 'react';

type Props = {
    count: number,
    decrement: Function,
    increment: Function
}

export default class Counter extends React.PureComponent<Props> {
    render() {
        return (
            <div>
                <button
                    type="button"
                    onClick={this.props.decrement}
                >{'-'}</button>
                <span>{this.props.count}</span>
                <button
                    type="button"
                    onClick={this.props.increment}
                >{'+'}</button>
            </div>
        )
    }
}
