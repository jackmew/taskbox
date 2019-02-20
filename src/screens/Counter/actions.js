// @flow
const counterIncrement: 'COUNTER_INCREMENT' = 'COUNTER_INCREMENT';
const counterDecrement: 'COUNTER_DECREMENT' = 'COUNTER_DECREMENT';
const notificationShow: 'NOTIFICATION_SHOW' = 'NOTIFICATION_SHOW';
const notificationHide: 'NOTIFICATION_HIDE' = 'NOTIFICATION_HIDE';

const actionTypes = {
    counterIncrement,
    counterDecrement,
    notificationShow,
    notificationHide
};
export default actionTypes;

type CounterAction = {
    type: typeof counterIncrement | typeof counterDecrement
}
export type Notification = {
    isShow: boolean,
    text: ?string
}
export type NotificationAction = {
    type: typeof notificationShow | typeof notificationHide,
    notification: Notification
}
export type Action =
    | CounterAction
    | NotificationAction

export const increment = (): CounterAction => {
    return { type: actionTypes.counterIncrement }
};
export const decrement = (): CounterAction => {
    return {
        type: actionTypes.counterDecrement
    }
};
export const showNotification = (text: string): NotificationAction => {
    return {
        type: actionTypes.notificationShow,
        notification: {
            isShow: true,
            text
        }
    }
};
export const hideNotification = (): NotificationAction => {
    return {
        type: actionTypes.notificationHide,
        notification: {
            isShow: false,
            text: null
        }
    }
};
