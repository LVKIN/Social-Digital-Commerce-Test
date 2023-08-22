import styled from "styled-components";

export const DoubleBannerContainer = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 1340px;
  width: 100%;
  margin-inline: auto;
`;

export const LeftBanner = styled.div`
  width: 660px;
  height: 360px;
  background: url("https://socialsahomolog.vtexassets.com/assets/vtex.file-manager-graphql/images/117c8a23-c15b-41cc-af9f-bb6d4d937f59___b248dedfef5692a11f8ab98407c05868.png") no-repeat;
  background-size: contain;
  padding: 50px;
`;

export const RightBanner = styled.div`
  width: 660px;
  height: 360px;
  background: url("https://socialsahomolog.vtexassets.com/assets/vtex.file-manager-graphql/images/c1d9e66a-e221-49ff-9a3c-a9f58b25b908___0a080f8a5fc141c6f2a4267eae5fd390.png") no-repeat;
  background-size: contain;
  padding: 50px;
`;

export const BannerTitle = styled.h1`
  font-size: 32px;
  line-height: 40px;
  font-family: "Inter", sans-serif;
  margin: 0;
  color: #fff;
`;

export const BannerText = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  color: #fff;
  width: 50%;
`;