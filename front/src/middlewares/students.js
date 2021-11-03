import axios from "axios";
import { GET_ALL_STUDENTS, saveStudents } from 'src/actions/students'

const studentsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ALL_STUDENTS: {
      next(action);
      axios.get('https://o-projetheque.herokuapp.com/students')
      .then((response) => {
        console.log(response)
        const list = response.data
        console.log(list)
        store.dispatch(saveStudents(list));
      })
      .catch((error) => {
        console.error(error);
      });
    } 
    default:
      next(action);
  }
}

export default studentsMiddleware;
