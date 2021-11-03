import axios from 'axios';
import { GET_RANDOM_PROJECTS, saveProjects, GET_ALL_PROJECTS } from 'src/actions/projects';

const projectMiddleware = (store) => (next) => (action) => {
  switch(action.type) {
    case GET_RANDOM_PROJECTS: {
      next(action);
      axios.get('https://o-projetheque.herokuapp.com/')
        .then((response) => {
          console.log(response)
          const list = response.data
          console.log(list)
          store.dispatch(saveProjects(list));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    case GET_ALL_PROJECTS : {
      next(action);
      axios.get('https://o-projetheque.herokuapp.com/projects')
        .then((response) => {
          console.log(response)
          const list = response.data
          console.log(list)
          store.dispatch(saveProjects(list));
        })
        .catch((error) => {
          console.error(error);
        });
    }
    default:
      next(action);
  }
}

export default projectMiddleware;
