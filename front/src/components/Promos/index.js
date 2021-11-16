import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPromos, changeSearchPromos } from 'src/actions/promos'
import { filteredSearch } from "src/selectors/promos";
import { Card, Input } from "semantic-ui-react";
import CardPromo from "src/components/CardPromo";
import Loader from 'src/components/Loader'
import ScrollTop from "src/components/ScrollTop";
import './style.scss';

export default function Promos () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPromos())
  }, [])
  const search = useSelector((state) => state.promos.search)
  const allPromos = useSelector(state => filteredSearch(state.promos.list, search))
  console.log(allPromos);
  const loader = useSelector((state) => state.promos.loader);
  if (loader) {
    return <Loader />;
  }
  return (
    <div className="promos">
      <div className="promos-header">
        <h1 className="promos-title">Les promotions</h1>
        <p className="promos-description">Toutes les promotions d'étudiants d'O'Clock !</p>
        {/* C'est la searchbar */}
        {/* attention changement action='rechercher' pour icon loupe */}
        <Input
          icon='search'
          name='rechercher'
          placeholder='Rechercher une promotion'
          className="promos-searchbar"
          value={search}
          onChange={(event) => {
            event.preventDefault()
            dispatch(changeSearchPromos(event.target.value, 'search'))
          }}
        />
      </div>
      <div className="promos-list">
          {allPromos.map((allPromo) => (
            <CardPromo key={allPromos.id} {...allPromo} />
          ))}
      </div>
    <ScrollTop className='scrolltop'/>
    </div>
  )
}
