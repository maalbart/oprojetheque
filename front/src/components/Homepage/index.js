import React from "react";
import logo from 'src/assets/logo-principal.png'
import CardProject from "src/components/CardProject";
import './style.scss';

export default function Homepage () {
  return (
    <div className="homepage">
      <div className="homepage-presentation">
            <img src={logo} alt="logo-principal" className="homepage-presentation-logo"/>
        <p className="homepage-presentation-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente deserunt libero dicta nesciunt eius commodi fuga voluptate natus reprehenderit voluptates vitae, sit eum? Rem deserunt ea doloremque ex qui labore.
        Possimus cumque et numquam deleniti quas accusamus itaque. Error nemo, totam vitae ipsam ea quo rerum sint eveniet sed dolorem labore natus expedita culpa! Dolor quis fugiat dolore culpa.</p>
      </div>
      <div className="homepage-suggest">
        <CardProject title="test1" description="c'est le test 1"/>
        <CardProject title="test2" description="c'est le test 2"/>
        <CardProject title="test3" description="c'est le test 3"/>
        <CardProject title="test4" description="c'est le test 4"/>
        <CardProject title="test5" description="c'est le test 5"/>
      </div>
    </div>
  )
}
