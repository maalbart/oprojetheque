import React from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer'
import Benjicowboy from 'src/assets/benjicowboy.jpg';


const Error = () => (
  <Page>
    <Header />
    <Content
      title="Erreur 404"
      text="Nous sommes désolé, une erreur s'est produite."
    />
    <img src={Benjicowboy} alt="benjicowboy" className="error-benjicowboy"/>
    <Footer />
  </Page>
);

export default Error;

