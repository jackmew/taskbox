import React from 'react';
import PropTypes from 'prop-types';

export default class Counter extends React.PureComponent {
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
