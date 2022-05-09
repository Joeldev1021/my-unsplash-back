import React from "react";
import Search from "../search/Search";
import "./index.scss";

import { Photo } from "../../interface";

interface Props {
  handleSearch: (value: string) =>void;
  setIsModalOpen: (value: boolean) => void;
}

const Header:React.FC<Props> = ({handleSearch, setIsModalOpen})  => {
 
  return (
    <header className="header">
      <div style={{"display": "flex"}}>
        <img src="./logo.svg" alt="logo" />
        <Search handleSearch={handleSearch}/>
      </div>
      <button onClick={() => setIsModalOpen(true)} className="header-btn">Add Photo</button>
    </header>
  );
};

export default Header;
