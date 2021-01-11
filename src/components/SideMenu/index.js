import React, { useContext, useEffect } from "react";
import { SideMenuContainer } from "./style";

import GradeForm from "./GradeForm";
import PriceForm from "./PriceForm";
import CusineForm from "./CusineForm";

const SideMenu = () => {
  return (
    <SideMenuContainer>
      <GradeForm />
      <PriceForm />
      <CusineForm />
    </SideMenuContainer>
  );
};

export default SideMenu;
