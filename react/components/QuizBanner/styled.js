import styled from "styled-components";

export const QuizBannerContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1340px;
  width: 100%;
  height: 380px;
  margin-inline: auto;
  margin-bottom: 50px;
  padding: 50px;
  background: url("https://socialsahomolog.vtexassets.com/assets/vtex.file-manager-graphql/images/7020f72e-2d21-4442-8d8c-f21f50ce25c8___123b50c7275f981c4cc0769ec1937bba.png") no-repeat;
  background-size: contain;
`;

export const BannerTitle = styled.h1`
  font-size: 32px;
  line-height: 40px;
  font-family: "Inter", sans-serif;
  margin: 0;
  color: #2A1246;
`;

export const BannerText = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  color: #2A1246;
  width: 50%;
`;