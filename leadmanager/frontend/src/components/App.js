import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Dashboard from './Lead/Dashboard';
import { Provider } from 'react-redux';
import store from '../store';


const App = () => {
    return (
        <Provider store={store}>
            <>
                <Header />
                <div className="container">
                    <Dashboard />
                </div>
            </>
        </Provider>
    )
}

ReactDom.render(<App />, document.getElementById("app"))