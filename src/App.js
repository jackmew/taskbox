import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Taskbox from './screens/Taskbox';
import Counter from './screens/Counter';

export const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Taskbox />
                <Counter />
            </Provider>
        );
    }
}

export default App;
