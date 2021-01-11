import React, { useContext, useEffect } from "react";
import { FaRegStar } from "react-icons/fa";
import { useForm } from "../../hooks/useForm";
import { FilteredResContext } from "../../context/FilteredResContext";
import { RestaurantsContext } from "../../context/RestaurantsContext";
import swal from "sweetalert";

const GradeForm = () => {
  const { restaurants } = useContext(RestaurantsContext);
  const { filteredRes, setFilteredRes } = useContext(FilteredResContext);
  const [form, changeInput] = useForm({
    oneStar: false,
    twoStars: false,
    threeStars: false,
    fourStars: false,
    fiveStars: false,
  });

  function filterGrade(min, max) {
    const newRes = filteredRes?.filter(
      (res) =>
        res.restaurant.user_rating.aggregate_rating < max &&
        res.restaurant.user_rating.aggregate_rating > min
    );
    if (newRes.length < 1) {
      swal("Não encontrado :/");
      return setFilteredRes(filteredRes);
    }
    return setFilteredRes(newRes);
  }
  useEffect(() => {
    //1
    if (form.oneStar) {
      return filterGrade(0, 1.1);
    }
    if (form.twoStars) {
      return filterGrade(2, 3);
    }
    if (form.threeStars) {
      return filterGrade(3, 4);
    }
    if (form.fourStars) {
      return filterGrade(4, 5);
    }
    if (form.fiveStars) {
      return filterGrade(5, 6);
    }

    if (
      !form.oneStar &&
      !form.twoStars &&
      !form.threeStars &&
      !form.fourStars &&
      !form.fiveStars
    ) {
      setFilteredRes(restaurants);
    }
  }, [
    form.oneStar,
    form.twoStars,
    form.threeStars,
    form.fourStars,
    form.fiveStars,
  ]);

  return (
    <div>
      <h2> NOTA </h2>
      <div>
        <input
          type="checkbox"
          checked={form.oneStar}
          name={"oneStar"}
          onChange={changeInput}
        />
        <label>
          <FaRegStar />
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={form.twoStars}
          name={"twoStars"}
          onChange={changeInput}
        />
        <label>
          <>
            <FaRegStar /> <FaRegStar />
          </>
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={form.threeStars}
          name={"threeStars"}
          onChange={changeInput}
        />
        <label>
          <>
            <FaRegStar /> <FaRegStar /> <FaRegStar />
          </>
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={form.fourStars}
          name={"fourStars"}
          onChange={changeInput}
        />
        <label>
          <>
            <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar />
          </>
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={form.fiveStars}
          name={"fiveStars"}
          onChange={changeInput}
        />
        <label>
          <>
            <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar />
            <FaRegStar />
          </>
        </label>
      </div>
    </div>
  );
};

export default GradeForm;
