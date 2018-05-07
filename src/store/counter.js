import { createAction, createReducer } from 'redux-act';

const initialState = {
    counter: 0
};


export const onIncrement = createAction('increment');
export const onDecrement = createAction('decrement');

export default createReducer({
    [onIncrement]: (state) => ({...state, counter: state.counter + 1}),
    [onDecrement]: (state) => ({...state, counter: state.counter - 1})
}, initialState);