import styled from "styled-components";

export const TripleBannerContainer = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 1340px;
  width: 100%;
  margin-inline: auto;
  margin-bottom: 60px;
`;

export const LeftBanner = styled.div`
  width: 430px;
  height: 180px;
  background: url("https://socialsahomolog.vtexassets.com/assets/vtex.file-manager-graphql/images/17058e0d-5f70-4242-bfe0-0a3c9f1459bb___93bb0638cde85d743582ba6475e3e486.png") no-repeat;
  background-size: contain;
  padding: 20px 25px;
`;

export const MidBanner = styled.div`
  width: 430px;
  height: 180px;
  background: url("https://socialsahomolog.vtexassets.com/assets/vtex.file-manager-graphql/images/6f365253-8c59-4a15-aa59-b3e5ca4f7fb4___0c1a5fc07c8776c19e567fad2482cd5b.png") no-repeat;
  background-size: contain;
  padding: 20px 25px;
`;

export const RightBanner = styled.div`
  width: 430px;
  height: 180px;
  background: url("https://socialsahomolog.vtexassets.com/assets/vtex.file-manager-graphql/images/406e2bda-ecc0-4443-bd70-17de39d3c4de___9c0a96606f9d2d42ba734fe65fa966a1.png") no-repeat;
  background-size: contain;
  padding: 20px 25px;
`;

export const BannerText = styled.p`
  font-size: 22px;
  line-height: 26px;
  font-family: "Inter", sans-serif;
  color: #000;
  width: 40%;
`;