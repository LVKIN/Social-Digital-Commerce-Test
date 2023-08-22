import React from "react";
import SeeMoreButton from "../SeeMoreButton/index";

import * as S from "./styled";

const QuizBanner = () => (
  <S.QuizBannerContainer>
      <S.BannerTitle>Suplementos que fazem a diferença!</S.BannerTitle>
      <S.BannerText>Responda nosso quiz e descubra o que seu pet precisa para uma vida mais saudável!</S.BannerText>
      <SeeMoreButton text="Responder Quiz" link="#" bgColor="#3377FA" />
  </S.QuizBannerContainer>
);

export default QuizBanner;