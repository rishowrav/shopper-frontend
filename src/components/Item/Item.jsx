import "./Item.css";

const Item = ({ item }) => {
  const { image, name, new_price, old_price } = item;
  return (
    <div className="item">
      <img src={image} alt="product image" />
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${new_price}</div>
        <div className="item-price-old">${old_price}</div>
      </div>
    </div>
  );
};

export default Item;
