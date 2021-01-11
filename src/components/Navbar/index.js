import React from "react";
import { NavBarContainer } from "./style";
import logo from "../../assets/logo-red.jpg";
import { useHistory } from "react-router-dom";
const NavBar = (props) => {
  const history = useHistory();
  return (
    <NavBarContainer onSubmit={props.onSubmit}>
      <img src={logo} alt="UaiFood" onClick={() => history.push("/")} />
      <div>
        <input
          value={props.inpValue}
          onChange={props.inpChange}
          placeholder={props.placeholder}
        />
        <button> BUSCAR </button>
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
