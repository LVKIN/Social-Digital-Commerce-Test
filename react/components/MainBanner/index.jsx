import React from "react";
import * as S from "./styled.js";

const MainBanner = () => (
  <S.MainBannerContainer>
    <S.MainBannerTextContent>
      <S.MainBannerText>Mais Histórias <br /> para você viver <br /> perto do seu pet.</S.MainBannerText>
      <S.MainBannerCTA type="button">Compre agora</S.MainBannerCTA>
    </S.MainBannerTextContent>

    <S.MainBannerImage src="https://socialsahomolog.vtexassets.com/assets/vtex.file-manager-graphql/images/016b08de-9f06-49ac-80f7-801237be23ad___e9b988813052ce894eb624e95ec94408.png" />
  </S.MainBannerContainer>
)

export default MainBanner;