// @flow
import actionTypes, { type Action } from './actions'

type State = number

const initialState = 0;
const count = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case actionTypes.increment:
            return state + 1;
        case actionTypes.decrement:
            return state - 1;
        default:
            return state;
    }
};
export default count;
