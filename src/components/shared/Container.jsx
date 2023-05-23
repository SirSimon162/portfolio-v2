import React from "react";
import { ContainerBox } from "../../styles/componentStyles/container.styles";

function Container({ children }) {
  return <ContainerBox>{children}</ContainerBox>;
}

export default Container;
