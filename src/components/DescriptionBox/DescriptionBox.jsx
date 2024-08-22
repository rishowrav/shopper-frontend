import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          provident quidem animi nihil excepturi saepe cumque nesciunt maxime
          esse dolores debitis facere eligendi neque mollitia ut, amet hic, eius
          id. Aperiam rem magni temporibus magnam natus modi ducimus
          consequuntur cumque.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse aut
          aliquam exercitationem in illo id optio soluta voluptatum repellendus
          ratione!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
