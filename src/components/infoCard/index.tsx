import './styles.css';

function InfoCard() {
    const image = require('../../assets/image/image-jussi.png')
    return (
        <section className='infoCard_container'>
            <div className='infoCard_container-content'>
                <div className='infoCard_container-info' >
                    <h2 className='infoCard_container-info-title'>Olá, somos a Jüssi</h2>
                    <p className='infoCard_container-info-subTitle'>A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.</p>
                    <div>
                        <button className='infoCard_container-button'>Conheça a Jüssi</button>
                    </div>
                </div>
                <div className='infoCard_container-image'>
                    <img src={image} alt='Imagem do escritorio da Jüssi' />
                </div>
            </div>
        </section>
    );
}
export default InfoCard;