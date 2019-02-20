const actionTypes = {
    increment: "COUNT_INCREMENT",
    decrement: "COUNT_DECREMENT"
};

export const increment = () => ({ type: actionTypes.increment });
export const decrement = () => {
    return {
        type: actionTypes.decrement
    }
};

export default actionTypes;

