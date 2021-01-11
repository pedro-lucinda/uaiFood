import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useGetData } from "../../hooks/useGetData";
import { FilteredResContext } from "../../context/FilteredResContext";
import { RestaurantsContext } from "../../context/RestaurantsContext";
import { v4 as uuidv4 } from "uuid";
import RestaurantCard from "../../components/RestaurantCard";
import { SearchResContainer, SearchResWrapper } from "./style";
import SideMenu from "../../components/SideMenu";
import NavBar from "../../components/Navbar";
import Loading from "../../components/Loading";
import swal from "sweetalert";
import noImg from "../../assets/noImg.png";

const SearchResultsPage = () => {
  const params = useParams();
  const { filteredRes, setFilteredRes } = useContext(FilteredResContext);
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);
  //getRestaurantes
  const [data] = useGetData([], `/geocode?lat=${params.lat}&lon=${params.lon}`);
  const restaurantsNearby = data.nearby_restaurants;
  const [userInput, setUserInput] = useState("");
  //filteredList
  useEffect(() => {
    if (restaurantsNearby?.length < 1) {
      return swal("Nenhum restaurante foi encontrado, tente outra localização :/");
    }
    setFilteredRes(restaurantsNearby);
    return setRestaurants(restaurantsNearby);
  }, [restaurantsNearby]);
  //show all restaurants if user clear the input
  useEffect(() => {
    userInput === "" && setFilteredRes(restaurants);
  }, [userInput]);

  //filter user input
  function handleSearch(e) {
    e.preventDefault()
    userInput === "" && swal("Digite nome de um restaurante para buscar!");
    const results = restaurants.filter((res) =>
      res.restaurant.name.toLowerCase().includes(userInput.toLowerCase())
    );
    if (results.length < 1) {
      swal("Restaurante não encontrado, tente pesquisar por outro termo :/");
      setUserInput("");
      return setFilteredRes(restaurants);
    }
    return setFilteredRes(results);
  }

  return (
    <SearchResWrapper>
      <NavBar
      onSubmit={handleSearch}
        inpValue={userInput}
        inpChange={(e) => setUserInput(e.target.value)}
        onClick={handleSearch}
        placeholder={params.name}
      />
      <SearchResContainer>
        <SideMenu />
        <main>
          {!filteredRes ? (
            <Loading />
          ) : (
            filteredRes.map((res) => (
              <RestaurantCard
                key={uuidv4()}
                img={res.restaurant.featured_image || noImg}
                alt={res.restaurant.name}
                resName={res.restaurant.name}
                address={res.restaurant.location.address}
                stars={res.restaurant.user_rating.aggregate_rating}
                currency={res.restaurant.currency}
                price={res.restaurant.average_cost_for_two}
                cusine={res.restaurant.cuisines}
              />
            ))
          )}
        </main>
      </SearchResContainer>
    </SearchResWrapper>
  );
};

export default SearchResultsPage;
