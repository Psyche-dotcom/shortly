import React from "react";

const Cards = ({ title, classNameB, para, img_url }) => {
  return (
    <div className={classNameB}>
      <div className="brand-icon">
        <img src={img_url} alt="brand icon" />
      </div>

      <h5>{title}</h5>
      <p>{para}</p>
    </div>
  );
};

export default Cards;
