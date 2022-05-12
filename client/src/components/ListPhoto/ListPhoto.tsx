import React, { useContext, useEffect, useState } from "react";
import { PhotoContext } from "../../context/PhotoContext";
import { Photo } from "../../interface";
import ModalPassword from "../modal/ModalPassword";
import "./index.scss";

interface Props {
  photo: Photo;
}

const ListPhoto: React.FC<Props> = ({ photo }) => {
  const [alertDelete, setAlertDelete] = useState(false);

  const handleDelete = (id?:string) => {
    setAlertDelete(true);
  };

  return (
    <>
      <div className="card">
        <button onClick={() => handleDelete(photo!._id)} className="card-btn">
          Delete
        </button>
        <img className="card-img" src={photo.url} alt={photo.label} />
        <p className="card-label">{photo.label}</p>
      </div>
      {alertDelete && <ModalPassword type="delete" id={photo!._id} setAlertDelete={setAlertDelete}  />}
    </>
  );
};

export default ListPhoto;
