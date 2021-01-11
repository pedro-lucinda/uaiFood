import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { PriceTag } from "../smallComponents/PriceTag";
import { Cusinetag } from "../smallComponents/Cusinetag";
import { ResCardBottomBar, RestaurantCardContainer } from "./style";
const RestaurantCard = (props) => {
  function showStars(stars) {
    if (stars >= 2 && stars < 3) {
      return (
        <>
          <FaStar />
          <FaStar />
        </>
      );
    } else if (stars >= 3 && stars < 4) {
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      );
    } else if (stars >= 4 && stars < 5) {
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      );
    } else if (stars === 5) {
      return (
        <>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </>
      );
    } else if (stars >= 1 && stars < 2) {
      return <FaStar />;
    } else {
      return <p> No Ratting Avalible </p>;
    }
  }

  return (
    <RestaurantCardContainer>
      <img src={props.img} alt={props.alt} />
      <article>
        <section>
          <h2> {props.resName} </h2>
          <p> {props.address} </p>
          <h3>{showStars(props.stars)}</h3>
        </section>
        <ResCardBottomBar>
          <PriceTag>
            <FaUserFriends />
            <h3>
              {props.currency} {props.price}
            </h3>
          </PriceTag>
          <Cusinetag>
            <h3>{props.cusine} </h3>
          </Cusinetag>
        </ResCardBottomBar>
      </article>
    </RestaurantCardContainer>
  );
};

export default RestaurantCard;
