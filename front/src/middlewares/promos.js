import axios from "axios";
import { GET_ALL_PROMOS, savePromos } from 'src/actions/promos'

const promosMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ALL_PROMOS: {
      next(action);
      axios.get('https://o-projetheque.herokuapp.com/promos')
      .then((response) => {
        console.log(response)
        const list = response.data
        console.log(list)
        store.dispatch(savePromos(list));
      })
      .catch((error) => {
        console.error(error);
      });
    } 
    default:
      next(action);
  }
}

export default promosMiddleware;
