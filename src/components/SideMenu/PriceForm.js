import React, { useContext, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { FilteredResContext } from "../../context/FilteredResContext";
import { RestaurantsContext } from "../../context/RestaurantsContext";
import swal from "sweetalert";

const PriceForm = (props) => {
  const { restaurants } = useContext(RestaurantsContext);
  const { filteredRes, setFilteredRes } = useContext(FilteredResContext);
  const [form, changeInput] = useForm({
    fifty: false,
    fiftyEighty: false,
    eightyOneHundred: false,
    moreThenOneHundredTen: false,
  });

  function filterPrice(min, max) {
    const newRes = filteredRes?.filter(
      (res) =>
        res.restaurant.average_cost_for_two >= min &&
        res.restaurant.average_cost_for_two <= max
    );
    if (newRes.length < 1) {
      swal("Não encontrado :/");
      return setFilteredRes(filteredRes);
    }
    return setFilteredRes(newRes);
  }

  useEffect(() => {
    if (form.fifty) {
      return filterPrice(0, 50);
    }
    if (form.fiftyEighty) {
      return filterPrice(50, 80);
    }
    if (form.eightyOneHundred) {
      return filterPrice(80, 110);
    }
    if (form.moreThenOneHundredTen) {
      return filterPrice(110, 100000);
    }

    if (
      !form.fifty &&
      !form.fiftyEighty &&
      !form.eightyOneHundred &&
      !form.moreThenOneHundredTen
    ) {
      setFilteredRes(restaurants);
    }
  }, [
    form.fifty,
    form.fiftyEighty,
    form.eightyOneHundred,
    form.moreThenOneHundredTen,
  ]);

  return (
    <div>
      <h2> PREÇO PARA DOIS </h2>
      <div>
        <input
          type="checkbox"
          checked={form.fifty}
          name={"fifty"}
          onChange={changeInput}
        />
        <label>Até R$50</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={form.fiftyEighty}
          name={"fiftyEighty"}
          onChange={changeInput}
        />
        <label>Até R$50 a R$80</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={form.eightyOneHundred}
          name={"eightyOneHundred"}
          onChange={changeInput}
        />
        <label>Até R$80 a R$110</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={form.moreThenOneHundredTen}
          name={"moreThenOneHundredTen"}
          onChange={changeInput}
        />
        <label>Acima de R$110</label>
      </div>
    </div>
  );
};

export default PriceForm;
