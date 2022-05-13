import React from "react";
import Search from "../search/Search";
import "./index.scss";

import { Photo } from "../../interface";
import ModalCreate from "../modal/ModalCreate";

interface Props {
  handleSearch: (value: string) => void;
  setIsModalOpen: (value: boolean) => void;
  isModalOpen: boolean;
}

const Header: React.FC<Props> = ({ handleSearch, setIsModalOpen, isModalOpen }) => {
  return (
    <>
      <header className="header">
        <div style={{ display: "flex" }}>
          <img className="header-logo" src="./logo.svg" alt="logo" />
          <Search handleSearch={handleSearch} />
        </div>
        <button onClick={() => setIsModalOpen(true)} className="header-btn">
          Add Photo
        </button>
      </header>
       {isModalOpen && (
        <ModalCreate
          setIsModalOpen={setIsModalOpen}
        />
      )} 
    </>
  );
};

export default Header;
