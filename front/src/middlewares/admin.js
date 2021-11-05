import axios from "axios";
import { SUBMIT_PROMO_FORM } from 'src/actions/admin'

const adminMiddlewares = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_PROMO_FORM:
      next(action)
      axios.post('https://o-projetheque.herokuapp.com/admin', { newPromo })
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    default:
      next(action);
  }
}

export default adminMiddlewares
