import actionTypes from './actions'

const initialState = 0;
const count = (state = initialState, action) => {
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
