import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import routes from './routes';
import rootReducer from './rootReducer';

import registerServiceWorker from './registerServiceWorker';
import { userLoggedIn } from './actions/auth';

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

if(localStorage.jhcisgisJWT){
    const user = { token: localStorage.jhcisgisJWT };
    store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            {routes}
        </Provider>
    </BrowserRouter>, 
    document.getElementById('root')
);
registerServiceWorker();
