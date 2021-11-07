import axios from "axios";
import { GET_ALL_PROMOS, savePromos, GET_ONE_PROMO, saveOnePromo } from 'src/actions/promos'

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
      break;
    } 
    case GET_ONE_PROMO: {
      next(action);
      const id = action.id
      axios.get(`https://o-projetheque.herokuapp.com/promo/${id}`)
      .then((response) => {
        console.log(response)
        const promoData = response.data
        console.log(promoData)
        store.dispatch(saveOnePromo(promoData))
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

export default promosMiddleware;
