import axios from "axios";
import { GET_ALL_STUDENTS, saveStudents, GET_ONE_STUDENT, saveOneStudent } from 'src/actions/students'

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
      break;
    }
    case GET_ONE_STUDENT: {
      next(action)
      const id = action.id
      axios.get(`https://o-projetheque.herokuapp.com/student/${id}`)
      .then((response) => {
        console.log(response)
        const studentData = response.data
        console.log(studentData)
        store.dispatch(saveOneStudent(studentData))
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

export default studentsMiddleware;
