import React from "react";
import { useHistory } from "react-router-dom";
import "./MenuItem.scss";

function MenuItem({ title, imageUrl, size, linkUrl }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`${linkUrl}`);
  };

  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        onClick={() => handleClick()}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
