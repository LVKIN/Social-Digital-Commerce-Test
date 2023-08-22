import React from "react";
import SeeMoreButton from "../SeeMoreButton/index";

import * as S from "./styled";

const TripleBanner = () => (
  <S.TripleBannerContainer>
    <S.LeftBanner>
      <S.BannerText>Pouca disposição? </S.BannerText>
      <SeeMoreButton text="Saiba mais" link="#" bgColor="#FE7E00" />
    </S.LeftBanner>

    <S.MidBanner>
      <S.BannerText>Baixa imunidade?  </S.BannerText>
      <SeeMoreButton text="Saiba mais" link="#" bgColor="#A26EE5" />
    </S.MidBanner>

    <S.RightBanner>
      <S.BannerText>Alergias e queda de pelos?  </S.BannerText>
      <SeeMoreButton text="Saiba mais" link="#" bgColor="#4FC9C0" />
    </S.RightBanner>
  </S.TripleBannerContainer>
);

export default TripleBanner;