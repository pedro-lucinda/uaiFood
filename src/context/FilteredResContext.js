import React, { useState, createContext } from "react";

export const FilteredResContext = createContext();
export const FilteredResContextProvider = (props) => {
  const [filteredRes, setFilteredRes] = useState([]);
  return (
    <FilteredResContext.Provider value={{ filteredRes, setFilteredRes }}>
      {props.children}
    </FilteredResContext.Provider>
  );
};
