import React from "react";
import "./index.scss";

interface Props {
  handleSearch: (value: string) => void;
}

const Search:React.FC<Props> = ({handleSearch}) => {
  return (
    <div className="header-search">
      <img src="./search.svg" alt="search" />
      <input onChange={(e)=> handleSearch(e.target.value)} placeholder="Search" type="text" />
    </div>
  );
};

export default Search;