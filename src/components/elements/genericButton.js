import React from "react";
import styled from "styled-components";

const GenericButton = (props) => {
  const { text, clickAction ,style,bordered} = props;

  return <StyledButton bordered={bordered} style={style || null} onClick={clickAction}>{text}</StyledButton>;
};
const StyledButton = styled.button`
  background: ${props => props.bordered ? "linear-gradient(180deg, #0F1207 0%, #0C2A09 100%),linear-gradient(180deg, #7CC870 0%, #3C6237 100%)" : "var(--button-bg), var(--theme-base-gradient)"} ;
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