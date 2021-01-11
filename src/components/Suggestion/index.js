import React from "react";
import { SuggestionContainer } from "./style";
import { TxSearch } from "../../styles/Text";

const Suggestion = (props) => {
  return (
    <SuggestionContainer onClick={props.onClick} className="animateUp">
      <TxSearch> {props.cityName} </TxSearch>
    </SuggestionContainer>
  );
};

export default Suggestion;
