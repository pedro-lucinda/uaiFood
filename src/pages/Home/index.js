import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
//components
import SearchBar from "../../components/SearchBar";
import Suggestion from "../../components/Suggestion";
//styles
import { SuggestionsContainer } from "../../components/smallComponents/SuggestionsContainer";
import { HomeContainer, Logo } from "./style";
import bg from "../../assets/bg.jpg";
import logo from "../../assets/logo-white.jpg";
import { TxHeader } from "../../styles/Text";
import swal from "sweetalert";
//hooks
import { useGetData } from "../../hooks/useGetData";

const Home = () => {
  const [displaySug, setDisplaySug] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [cityInfo, setCityInfo] = useState([]);
  const history = useHistory();
  //Get cities
  const [data] = useGetData([], `/cities?q=${userInput}`);

  //get cities suggestions or clear search
  useEffect(() => {
    if (userInput?.length > 2) {
      setSuggestions(data.location_suggestions);
      return data.location_suggestions.length > 2 && setDisplaySug(true);
    } else if (userInput.length <= 2) {
      setDisplaySug(false);
      return setSuggestions([]);
    }
  }, [userInput]);

  //Get City Details ==> restaurants and Redirect
  function handleCityInfo(name) {
    setUserInput("Loading...");
    api
      .get(`/locations?query=${name}`)
      .then((response) => {
        setUserInput(name);
        return setCityInfo(response.data.location_suggestions[0]);
      })
      .catch((error) => console.log(error));
  }

  //Pass params and redirect
  function handleSearch(e) {
    e.preventDefault();
    if (cityInfo.latitude) {
      return history.push(
        `/restaurants/${cityInfo.latitude}/${cityInfo.longitude}/${cityInfo.city_name}	`
      );
    } else if (!cityInfo.latitude) {
      return swal("Selecione uma cidade!");
    }
  }

  return (
    <HomeContainer bg={bg}>
      <Logo src={logo} alt="UaiFood" className="animateUp" />
      <div>
        <TxHeader className="animateUp">
          Descubra os melhores restaurantes em sua cidade
        </TxHeader>
        <SearchBar
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Insira sua cidade..."
          onSubmit={handleSearch}
        />

        {displaySug && (
          <SuggestionsContainer>
            {suggestions?.map((suggestion) => (
              <Suggestion
                key={suggestion.id}
                cityName={suggestion.name}
                onClick={() => handleCityInfo(suggestion.name)}
              />
            ))}
          </SuggestionsContainer>
        )}
      </div>
    </HomeContainer>
  );
};

export default Home;
