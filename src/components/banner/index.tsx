import React from 'react';
import './styles.css';

function Banner() {
  const product = require('../../assets/image/produtos.png')
  return (
    <section className='banner_container'>
      <div className='banner_container_content'>
        <div className='banner_container_items'>
          <h1 className='banner_container-title'>Criamos <br />lojas que <br /> vendem mais.</h1>
          <span className='banner_container-subTitle'>A Jüssi é especialista na criação de lojas <br /> usando a plataforma VTEX. Precisa criar sua <br /> loja ou migrar de plataforma?</span>
          <div>
            <button className='banner_container-button'>Veja nossas soluções</button>
          </div>
        </div>
        <div className='banner_container-img'>
          <img src={product} alt='Imagens de produtos' />
        </div>
      </div>
    </section>
  );
}
export default Banner;