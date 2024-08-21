import React from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="image" />
          <img src={product.image} alt="image" />
          <img src={product.image} alt="image" />
          <img src={product.image} alt="image" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="image"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="icon" />
          <img src={star_icon} alt="icon" />
          <img src={star_icon} alt="icon" />
          <img src={star_icon} alt="icon" />
          <img src={star_dull_icon} alt="icon" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div>
          <div className="productdisplay-right-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            dignissimos ea nesciunt sapiente. Quos, consectetur. Laudantium
            similique, neque doloribus quasi eligendi odio libero voluptatum
            cumque dolorum deserunt veniam iusto amet.
          </div>
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category: </span>Women, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags: </span>Modern, Letest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
