import React from 'react'
import { Card } from 'semantic-ui-react'
import CardStudent from "src/components/CardStudent"
import Loader from 'src/components/Loader'
import './style.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { getOnePromo } from 'src/actions/promos'


export function Promo () {
  const dispatch = useDispatch()
  const { id } = useParams()
  console.log(id)
  const promo = useSelector((state) => (state.promos.studentsByOnePromo));
  const loader = useSelector((state) => state.promos.loader);

  console.log(promo.studentsFromPromo)
  useEffect(() => {
    dispatch(getOnePromo(id))
  }, []);
  if (loader) {
    return <Loader />;
  }
  if (!promo) {
    return <Redirect to="/error" />;
  }
    return (
      <div className="promo">
        <div className="promo-content">
          <div className='promo-content-header'>
            <div className="promo-content-header-identity">
                <img src={promo.promoId.logo} alt="logo de la promo" className="promo-content-header-identity-img"/>
            </div>
            <div className="promo-content-header-description">
                <h1 className="promo-content-header-description-title">{promo.promoId.name}</h1>
                <h2 className="promo-content-header-description-date"> {promo.promoId.starting_date} - {promo.promoId.ending_date} </h2>
                <h3 className="promo-content-header-description-referent">Référent : Simon</h3>
            </div>
          </div>
            {/* <Button content="Projets/Etudiants" className="promo-button"/> */}
            <div className="promo-content-body">
                <Card.Group
                itemsPerRow={5}
                stackable
                centered
                className="project-footer-card">
                  {promo.studentsFromPromo.map((student) => (
                    <CardStudent key={student.id} {...student} />
                  ))}
                </Card.Group>
            </div>
        </div>
      </div>
    )
}
