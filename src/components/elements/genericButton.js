import React from "react";
import styled from "styled-components";

const GenericButton = (props) => {
  const { text, clickAction ,style} = props;
  return <StyledButton style={style || null} onClick={clickAction}>{text}</StyledButton>;
};
const StyledButton = styled.button`
  background: var(--button-bg), var(--theme-base-gradient);
  background-clip: padding-box, border-box;
  border:1px solid transparent ;
  height: 55px;
  color: var(--white);
  border-radius: 27.5px;
  display: flex;
  align-items: center;
  padding:0 32px;
  max-height:55px;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
`;

export default GenericButton;