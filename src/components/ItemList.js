const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((items) => {
        <div key={item.card.info.id}>
          <div>
            <span>{item.card.info.id}</span>
            <span>{item.card.info.price}</span>
          </div>
          <p>{item.card.info.description}</p>
        </div>;
      })}
    </div>
  );
};

export default ItemList;
