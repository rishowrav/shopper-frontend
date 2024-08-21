import "./Popular.css";
import data_products from "../assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_products.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
