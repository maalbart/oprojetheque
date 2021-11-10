import { combineReducers } from 'redux';

import promosReducer from './promos';
import userReducer from './user';
import projectsReducer from './projects'
import adminReducer from './admin'
import studentsReducer from './students'
import contactReducer from './contact';

const rootReducer = combineReducers({
  promos: promosReducer,
  user: userReducer,
  students: studentsReducer,
  projects: projectsReducer,
  admin: adminReducer,
  contact: contactReducer,
});

export default rootReducer;
