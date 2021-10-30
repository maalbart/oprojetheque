import { createStore, applyMiddleware, compose } from 'redux';


import rootReducer from 'src/reducers';
import user from 'src/middlewares/user';
import projectMiddleware from 'src/middlewares/projects';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(user, projectMiddleware),
);

const store = createStore(rootReducer, enhancers);

export default store;
