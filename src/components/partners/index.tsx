import React from 'react';
import './styles.css';

function Partners() {
  const Brastemp = require('../../assets/image/logo-brastemp.png')
  const CompraCerta = require('../../assets/image/logo-compra-certa.png')
  const Consul = require('../../assets/image/logo-consul.png')
  const TheBar = require('../../assets/image/logo-thebar.png')
  return (
    <section className='partners_container'>
      <div className='partners_container_content'>
        <p className='partners_container_text'>Nossas principais lojas VTEX</p>
        <span>→</span>
        <img src={Brastemp} alt='Icone da loja Brastemp' />
        <img src={CompraCerta} alt='Icone da loja Compra Certa' />
        <img src={Consul} alt='Icone da loja Consul' />
        <img src={TheBar} alt='IIcone da loja The Bar' />
      </div>
    </section>
  );
}
export default Partners;