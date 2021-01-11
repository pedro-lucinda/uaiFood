import React from "react";
import { FilteredResContextProvider } from "./context/FilteredResContext";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";
import Routes from "./Routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <RestaurantsContextProvider>
        <FilteredResContextProvider>
          <Routes />
        </FilteredResContextProvider>
      </RestaurantsContextProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
