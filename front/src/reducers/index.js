import { combineReducers } from 'redux';

import promosReducer from './promos';
import userReducer from './user';
import projectsReducer from './projects'
import studentReducer from './students'

const rootReducer = combineReducers({
  promos: promosReducer,
  user: userReducer,
  student: studentReducer,
  projects: projectsReducer
});

export default rootReducer;
