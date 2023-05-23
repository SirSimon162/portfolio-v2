import React from "react";
import {
  HeadingContainer,
  HeadingParent,
  HeadingUnderline,
} from "../../styles/componentStyles/heading.styles";
function Heading({ children }) {
  return (
    <HeadingParent>
      <HeadingContainer>{children}</HeadingContainer>
      <HeadingUnderline />
    </HeadingParent>
  );
}

export default Heading;
