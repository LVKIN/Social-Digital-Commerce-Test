import React from "react";
import * as S from "./styled";

const SeeMoreButton = ({ text, link, bgColor }) => (
  <S.SeeMoreButtonContainer href={link}>
    <S.SeeMoreText>{text}</S.SeeMoreText>
    <S.ArrowButton type="button" style={{backgroundColor: bgColor}} />
  </S.SeeMoreButtonContainer>
)

export default SeeMoreButton;