import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPromos } from 'src/actions/promos'
import { Card, Input } from "semantic-ui-react";
import CardPromo from "src/components/CardPromo";
import Loader from 'src/components/Loader'
import './style.scss';

export default function Promos () {
  const dispatch = useDispatch();
  const allPromos = useSelector(state => state.promos.list)
  console.log(allPromos);
  const loader = useSelector((state) => state.promos.loader);
  useEffect(() => {
    dispatch(getAllPromos())
  }, [])
  if (loader) {
    return <Loader />;
  }
  return (
    <div className="promos">
      <div className="promos-header">
        <h1 className="promos-title">Les promotions</h1>
        <p className="promos-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente deserunt libero dicta nesciunt eius commodi fuga voluptate natus reprehenderit voluptates vitae, sit eum? Rem deserunt ea doloremque ex qui labore.
        Possimus cumque et numquam deleniti quas accusamus itaque. Error nemo, totam vitae ipsam ea quo rerum sint eveniet sed dolorem labore natus expedita culpa! Dolor quis fugiat dolore culpa.</p>
        {/* C'est la searchbar */}
        <Input action='Rechercher' placeholder='Rechercher une promotion' className="promos-searchbar" />
      </div>
      <div className="promos-list">
        <Card.Group 
          itemsPerRow={3}
          stackable
          centered
          className="promos-list-card"
        >
          {allPromos.map((allPromo) => (
            <CardPromo key={allPromos.id} {...allPromo} />
          ))}
        </Card.Group>
      </div>
    </div>
  )
}
