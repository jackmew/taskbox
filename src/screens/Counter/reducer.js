// @flow
import actionTypes, { type Action, type Notification } from './actions'

type State = {
    count: number,
    notification: Notification
}

const initialState = {
    count: 0,
    notification: {
        isShow: false,
        text: null
    }
};
const count = (state: State = initialState, action: Action) => {

    switch (action.type) {
        case actionTypes.counterIncrement:
            return {
                ...state,
                count: state.count + 1
            };
        case actionTypes.counterDecrement:
            return {
                ...state,
                count: state.count - 1
            };
        case actionTypes.notificationShow:
            return {
                ...state,
                notification: { ...action.notification }
            };
        case actionTypes.notificationHide:
            return {
                ...state,
                notification: { ...action.notification }
            };
        default:
            return state;
    }
};
export default count;
