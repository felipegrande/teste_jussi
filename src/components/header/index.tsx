import Search from '../search';
import './styles.css';

function Header() {
  const Logo = require('../../assets/image/logo.png')
  const cart = require('../../assets/image/shopping-cart.png')
  return (
    <header className='header_container'>
      <section className='header_container_content'>
        <img src={Logo} alt='Logo Jüssi' />
        <span className='header_container_link' >Nossas soluções</span>
        <span className='header_container_link'>Conheça a Jüssi</span>
      </section>
      <section className='header_container_content_search'>
        <Search />
        <span className='header_container_link'>Login</span>
        <img src={cart} alt='Icone de carrinho de compra' />
      </section>
    </header>
  );
}
export default Header;