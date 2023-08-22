import React from "react";
import SeeMoreButton from "../SeeMoreButton/index";

import * as S from "./styled";

const PrescribeBanner = () => (
  <S.PrescribeBannerContainer>
    <S.PrescribeBannerTitle>Prescreva produtos Yanno</S.PrescribeBannerTitle>
    <S.PrescribeBannerText>Sendo um prescritor, você tem descontos exclusivos nos suplementos Yanno </S.PrescribeBannerText>
    <SeeMoreButton text="Saiba Mais" link="#" bgColor="#2A1246" />
  </S.PrescribeBannerContainer>
);

export default PrescribeBanner;