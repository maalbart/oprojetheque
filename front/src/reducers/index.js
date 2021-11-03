import { combineReducers } from 'redux';

import promosReducer from './promos';
import userReducer from './user';
import projectsReducer from './projects'
import studentsReducer from './students'

const rootReducer = combineReducers({
  promos: promosReducer,
  user: userReducer,
  students: studentsReducer,
  projects: projectsReducer
});

export default rootReducer;
