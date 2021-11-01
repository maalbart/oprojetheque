import axios from 'axios';
import { GET_RANDOM_PROJECTS, saveProjects } from 'src/actions/projects';

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
    default:
      next(action);
  }
}

export default projectMiddleware;
