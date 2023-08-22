import React from "react";
import SeeMoreButton from "../SeeMoreButton/index";

import * as S from "./styled";

const DoubleBanner = () => (
  <S.DoubleBannerContainer>
    <S.LeftBanner>
      <S.BannerTitle>Ômega 3</S.BannerTitle>
      <S.BannerText>O ômega 3 é um produto canino com uma fórmula inovadora e exclusiva, desenvolvida para promover a saúde dos seus cães.</S.BannerText>
      <SeeMoreButton text="Saiba mais" link="#" bgColor="#2A1246" />
    </S.LeftBanner>

    <S.RightBanner>
      <S.BannerTitle>Ômega 3</S.BannerTitle>
      <S.BannerText>O ômega 3 é um produto canino com uma fórmula inovadora e exclusiva, desenvolvida para promover a saúde dos seus cães.</S.BannerText>
      <SeeMoreButton text="Saiba mais" link="#" bgColor="#4FC9C0" />
    </S.RightBanner>
  </S.DoubleBannerContainer>
);

export default DoubleBanner;