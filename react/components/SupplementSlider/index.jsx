import React from "react";
import * as S from "./styled";
import SeeMoreButton from "../SeeMoreButton";

const SupplementSlider = () => (
  <S.SupplementSliderContainer>
    <S.LeftSide>
      <S.SupplementText>
        <h1>Um suplemento que vale por todos</h1>
        <p>O A-Z PET é indicado para reforçar o aporte nutricional dos nutrientes da fórmula para cães e gatos, em qualquer idade, de todas as raças e tamanhos. Esses suplementos são úteis quando há necessidade de fornecer nutrientes adicionais para ajudar na manutenção da saúde dos pets.</p>
      </S.SupplementText>
      <SeeMoreButton text="Saiba Mais" link="#" bgColor="#734BAF" />
    </S.LeftSide>

    <S.RightSide>
      <S.VitaminCard>
        <h1>12 vitaminas</h1>
        <p>12 minerais e 9 aminoácidos, além dos nutrientes taurina, luteína e betaclucana.</p>
      </S.VitaminCard>
      <S.CapsuleImage src="https://socialsahomolog.vtexassets.com/assets/vtex.file-manager-graphql/images/a854bad9-a5bf-47f9-adf7-91bdc3633650___622260750cb3c582a983c0173d0bea48.png" />
      <S.CapsuleCard>
        <h1>Cápsula Softgel</h1>
        <p>com aroma sabor carne</p>
      </S.CapsuleCard>
    </S.RightSide>
  </S.SupplementSliderContainer>
);

export default SupplementSlider;