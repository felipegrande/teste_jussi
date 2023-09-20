import Card from './Card';
import './styles.css';

function Shelf() {
    const listCards = [
        { item: "P1", name: "Nome do Produto #1", description: "Descrição do produto #1" },
        { item: "P2", name: "Nome do Produto #2", description: "Descrição do produto #2" },
        { item: "P3", name: "Nome do Produto #3", description: "Descrição do produto #3" },
        { item: "P4", name: "Nome do Produto #4", description: "Descrição do produto #4" },
    ]
    return (
        <section className='shelf_container'>
            <div className='shelf_container_content'>
                <h2 className='shelf_container_title'><span>{'//'}</span> Nossas soluções</h2>
                <div className='shelf_container_grid'>
                    {
                        listCards.map((prod, index) =>
                            <div key={index}>
                                <Card name={prod.name} title={prod.item} description={prod.description} />
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
}
export default Shelf;