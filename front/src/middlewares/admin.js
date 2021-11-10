import axios from "axios";
import { SUBMIT_PROMO_FORM, ADMIN_GET_ALL_PROMOS, adminSavePromos, ADMIN_GET_ALL_STUDENT_FROM_PROMO, adminSaveStudentsFromPromos } from 'src/actions/admin'

const adminMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case ADMIN_GET_ALL_PROMOS: {
      next(action);
      axios.get('https://o-projetheque.herokuapp.com/promos')
      .then((response) => {
        console.log(response)
        const promos = response.data
        console.log(promos)
        store.dispatch(adminSavePromos(promos));
      })
      .catch((error) => {
        console.error(error);
      });
      break;
    }
    case ADMIN_GET_ALL_STUDENT_FROM_PROMO: {
      next(action);
      axios.get('https://o-projetheque.herokuapp.com/students')
      .then((response) => {
        const studentsFromPromo = response.data
        store.dispatch(adminSaveStudentsFromPromos(studentsFromPromo));
      })
      .catch((error) => {
        console.error(error);
      });
      break;
    }
    case SUBMIT_PROMO_FORM: {
      next(action)
      const state = store.getState()
      axios.post('https://o-projetheque.herokuapp.com/admin', {

      })
        .then((response) => {
          console.log(response)
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

export default adminMiddlewares
