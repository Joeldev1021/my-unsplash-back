import React from "react";
import { PhotoInterface } from "../../interface";
import "./index.scss"

const ListPhoto: React.VFC<PhotoInterface> = ({ url, label }) => {
  return (
    <div className="card">
      <img className="card-img" src={url} alt={label} />
      <p className="card-label">{label}</p>
    </div>
  );
};

export default ListPhoto;
