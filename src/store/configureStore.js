import { createStore } from 'redux';
import rootReducer from './index.js'

const configureStore = () => {
    let store = createStore(rootReducer);
    console.log('store.getState()')
    console.log(store.getState())
    store.subscribe(() => console.log(store.getState()));
    return store
};

export default configureStore
