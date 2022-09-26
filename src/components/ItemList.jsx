import Item from './Item'

const ItemList = ({items}) => {
    return (
<div className="cards">
{items.map(item => (
    <Item
        key={item.id}
        nombre={item.nombre}
        stock= {item.stock}
        precio={item.precio}
        imagen={item.imagen}
        id={item.id}
    />
))}
</div>
    );
}

export default ItemList;

