import axios from 'axios';
import { Formik, Field, Form} from 'formik'
import { useDispatch } from 'react-redux';
import './style.scss'

export default function AdminAddPromo () {
  return (
    <div>
    <Formik
      initialValues={{
        name: '',
        starting_date: '',
        ending_date: '',
        // logo: '',
      }}
      onSubmit= {async (values) => {
        console.log(values)
        await new Promise((r) => setTimeout(r, 500));
        axios.post('https://o-projetheque.herokuapp.com/admin', {
          headers: { 'Access-Control-Allow-Origin': 'http://localhost:8080/login' },
          name: values.name,
          starting_date: values.starting_date,
          ending_date: values.ending_date,
        }, null, 2)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.error(error);
        })
      }}
    >
      <Form>
        <label htmlFor="name">Nom de la promo</label>
        <Field id="name" name="name" placeholder="Nom de la promo" />

        <label htmlFor="starting_date">Date de début</label>
        <Field type="date" id="starting_date" name="starting_date" />

        <label htmlFor="ending_date">Date de fin</label>
        <Field type="date" id="ending_date" name="ending_date" />

        {/* <label htmlFor="logo">Logo de la promo</label>
        <Field
          // id="logo"
          name="logo"
          type="file"
        /> */}
        <button type="submit">Envoyer</button>
      </Form>
    </Formik>
  </div>
  )
};
