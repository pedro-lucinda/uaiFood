import React, { useContext, useEffect } from "react";
//hooks
import { useForm } from "../../hooks/useForm";
//context
import { FilteredResContext } from "../../context/FilteredResContext";
import { RestaurantsContext } from "../../context/RestaurantsContext";
//alert
import swal from "sweetalert";

const CusineForm = () => {
  const { restaurants } = useContext(RestaurantsContext);
  const { filteredRes, setFilteredRes } = useContext(FilteredResContext);
  const [form, changeInput] = useForm({
    arabic: false,
    brazilian: false,
    chinese: false,
    french: false,
    seaFood: false,
    italian: false,
    japanese: false,
    mexican: false,
    peru: false,
  });

  function filterCusine(word) {
    const newRes = filteredRes.filter((res) =>
      res.restaurant.cuisines.toLowerCase().includes(`${word}`)
    );

    if (newRes.length < 1) {
      swal("Não encontrado :/");
      return setFilteredRes(restaurants);
    }
    return setFilteredRes(newRes);
  }

  useEffect(() => {
    if (form.arabic) {
      return filterCusine("arabic");
    }
    if (form.brazilian) {
      return filterCusine("brazilian");
    }

    if (form.chinese) {
      return filterCusine("chinese");
    }

    if (form.french) {
      return filterCusine("french");
    }

    if (form.seaFood) {
      return filterCusine("seaFood");
    }

    if (form.italian) {
      return filterCusine("italian");
    }

    if (form.japanese) {
      return filterCusine("japanese");
    }

    if (form.mexican) {
      return filterCusine("mexican");
    }
    if (form.peru) {
      return filterCusine("peru");
    }

    if (
      !form.arabic &&
      !form.brazilian &&
      !form.chinese &&
      !form.french &&
      !form.italian &&
      !form.seaFood &&
      !form.japanese &&
      !form.mexican &&
      !form.peru
    ) {
      setFilteredRes(restaurants);
    }
  }, [
    form.arabic,
    form.brazilian,
    form.chinese,
    form.french,
    form.seaFood,
    form.italian,
    form.japanese,
    form.mexican,
    form.peru,
  ]);

  return (
    <div>
      <h2> TIPO DE COZINHA </h2>
      <div>
        <input
          type="checkbox"
          checked={form.arabic}
          name={"arabic"}
          onChange={changeInput}
        />
        <label>Árabe</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={form.brazilian}
          name={"brazilian"}
          onChange={changeInput}
        />
        <label>Brasileira</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={form.chinese}
          name={"chinese"}
          onChange={changeInput}
        />
        <label>Chinesa</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={form.french}
          name={"french"}
          onChange={changeInput}
        />
        <label>Francesa</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={form.seaFood}
          name={"seaFood"}
          onChange={changeInput}
        />
        <label>Frutos do Mar</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={form.italian}
          name={"italian"}
          onChange={changeInput}
        />
        <label>Italiana</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={form.japanese}
          name={"japanese"}
          onChange={changeInput}
        />
        <label>Japonesa</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={form.mexican}
          name={"mexican"}
          onChange={changeInput}
        />
        <label>Mexicana</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={form.peru}
          name={"peru"}
          onChange={changeInput}
        />
        <label>Peruana</label>
      </div>
    </div>
  );
};

export default CusineForm;
