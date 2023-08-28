import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/Promotions.css';
import ErrorGenerator from './errors/ErrorGenerator';
import imagen1 from '../assets/promocion1.png'
import imagen2 from '../assets/promocion2.png'

const Promotions = () =>  {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <section className="promotions">
      <div className="promotion-carousel">
        <Slider {...settings}>
          <div className="promotion-slide">
            <img src={imagen1} alt="Promoción 1" />
            <p className="slide-description">
              <h3>HORA DE UN DESCANSO</h3>
              Viaja a destinos internacionales desde USD 97<br />
              Tarifa por trayecto
              <br />
              <Link to="/comprar" className="buy-button">Compra ya</Link>
            </p>
          </div>
          <div className="promotion-slide">
            <img src={imagen2} alt="Promoción 2" />
            <p className="slide-description">
              <h3>¡UN DESTINO NUEVO!</h3>
              Cusco te espera 🦙, vuela directo a partir de octubre 2023
              <br />
              <Link to="/comprar" className="buy-button">Compra ya</Link>
            </p>
          </div>
        </Slider>
      </div>
      <ErrorGenerator />
    </section>
  );
}

export default Promotions;
