import React from "react";
//style
import { SearchButton } from "../smallComponents/SearchButton";
import { SearchBarContainer } from "./style";

const SearchBar = (props) => {
  return (
    <SearchBarContainer className="animateUp" onSubmit={props.onSubmit}>
      <input
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      <SearchButton> BUSCAR </SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
