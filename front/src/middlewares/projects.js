import axios from 'axios';
import { GET_RANDOM_PROJECTS, saveProjects, GET_ALL_PROJECTS, GET_ONE_PROJECT, saveOneProject } from 'src/actions/projects';

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
      break;
    }
    case GET_ONE_PROJECT : {
      next(action);
      const id = action.id
      axios.get(`https://o-projetheque.herokuapp.com/project/${id}`)
      .then((response) => {
        console.log(response)
        const projectData = response.data
        console.log(projectData)
        store.dispatch(saveOneProject(projectData))
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
