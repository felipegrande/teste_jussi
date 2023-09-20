import './styles.css';

interface IProps {
    title: string,
    name: string,
    description: string,
}
function Card({ title, name, description }: IProps) {
    return (
        <section className='card_container'>
            <div className='card_container_circle'>
                <p>{title}</p>
            </div>
            <div className='card_container_content'>
                <p className='card_container_title'>{name}</p>
                <p className='card_container_description'>{description}</p>
                <p className='card_container_items'>• Feature 1</p>
                <p className='card_container_items' >• Feature 2</p>
                <p className='card_container_items' >• Feature 3</p>
                <button className='card_container_button'>Ver solução</button>
            </div>
        </section>
    );
}
export default Card;