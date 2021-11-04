import { combineReducers } from 'redux';

import promosReducer from './promos';
import userReducer from './user';
import projectsReducer from './projects'
import adminReducer from './admin'
import studentsReducer from './students'

const rootReducer = combineReducers({
  promos: promosReducer,
  user: userReducer,
  students: studentsReducer,
  projects: projectsReducer,
  admin: adminReducer,
});

export default rootReducer;
