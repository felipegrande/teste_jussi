import './styles.css';

function Footer() {
    const WppCompany = require('../../assets/image/wppcompany.png')
    const Facebook = require('../../assets/image/facebook.png')
    const Instagram = require('../../assets/image/instagram.png')
    const Linkedin = require('../../assets/image/linkedin.png')
    return (
        <footer className='footer_container'>
            <div className='footer_container_content'>
                <img src={WppCompany} alt='Logo wpp company' /> 
                <div className='footer_container_social'>
                <a href='https://www.facebook.com/agencia.jussi/?locale=pt_BR'>
                    <img src={Facebook} alt='Logo do facebook' />
                </a>
                <a href='https://www.instagram.com/jussi/?hl=pt'>
                    <img src={Instagram} alt='Logo do Instagram' /> 
                </a>
                <a href='https://www.linkedin.com/company/agencia-jussi/'>
                    <img src={Linkedin} alt='Logo do linkedin' />
                </a>  
                </div>
            </div>        
        </footer>
    );
}
export default Footer;