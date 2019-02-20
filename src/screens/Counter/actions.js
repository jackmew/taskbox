// @flow
const actionTypes = {
    increment: 'COUNT_INCREMENT',
    decrement: 'COUNT_DECREMENT'
};

export type IncrementAction = {
    type: 'COUNT_INCREMENT',
}
export type DecrementAction = {
    type: 'COUNT_DECREMENT'
}

export type Action =
    | IncrementAction
    | DecrementAction

export const increment = (): IncrementAction => {
    return { type: actionTypes.increment }
};
export const decrement = (): DecrementAction => {
    return {
        type: actionTypes.decrement
    }
};

export default actionTypes;

