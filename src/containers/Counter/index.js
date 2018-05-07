import PropTypes from 'prop-types';
import React, { Component } from 'react';
import * as CounterAction from '../../store/counter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Counter from '../../components/Counter';

class CounterContainer extends Component {
    incrementAsync = () => {
        this.props.dispatch({
            type: 'async'
        });
    };

    render() {
        const { counter, onIncrement, onDecrement } = this.props;
        return (
            <Counter
                counter={counter}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                incrementAsync={this.incrementAsync}
            />
        );
    }
}

CounterContainer.propTypes = {
    counter: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return { counter: state.counter.counter };
}

const mapDispatchToProps = dispatch => ({
    onIncrement: bindActionCreators(CounterAction.onIncrement, dispatch),
    onDecrement: bindActionCreators(CounterAction.onDecrement, dispatch),
    dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
