import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
class Counter extends Component {
    constructor(props) {
        super(props);
    }

    incrementIfOdd = () => {
        if (this.props.counter % 2 !== 0) {
            this.props.onIncrement();
        }
    };

    render() {
        const {
            counter,
            onIncrement,
            onDecrement,
            incrementAsync
        } = this.props;
        return (
            <p>
                Clicked: {counter} times{' '}
                <button onClick={onIncrement}>+</button>{' '}
                <button onClick={onDecrement}>-</button>{' '}
                <button onClick={this.incrementIfOdd}>Increment if odd</button>{' '}
                <Button type="primary" onClick={incrementAsync}>
                    Increment async
                </Button>
            </p>
        );
    }
}

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired
};

export default Counter;
