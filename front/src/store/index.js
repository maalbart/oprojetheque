import { createStore, applyMiddleware, compose } from 'redux';


import rootReducer from 'src/reducers';
import user from 'src/middlewares/user';
import projectMiddleware from 'src/middlewares/projects';
import promosMiddleware from 'src/middlewares/promos';
import studentsMiddleware from 'src/middlewares/students';
import adminMiddlewares from 'src/middlewares/admin';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(user, projectMiddleware, promosMiddleware, studentsMiddleware, adminMiddlewares),
);

const store = createStore(rootReducer, enhancers);

export default store;
