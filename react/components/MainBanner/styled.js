import styled from "styled-components";

export const MainBannerContainer = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: row;
  background-color: #fe7e00;
  font-family: "Inter", sans-serif;
  gap: 50px;
  margin-top: -160px;
  justify-content: center;
`;

export const MainBannerTextContent = styled.div`
  display: block;
  margin: 120px 0;
`;

export const MainBannerText = styled.h1`
  font-weight: 500;
  color: #2a1246;
  font-size: 38px;
  line-height: 62px;
`;

export const MainBannerCTA = styled.button`
  outline: none;
  border: none;
  border-radius: 50px;
  background-color: #fff;
  font-size: 18px;
  width: 200px;
  height: 55px;
  font-family: "Inter", sans-serif;
`;

export const MainBannerImages = styled.div`
  display: flex;
`;

export const MainBannerImage = styled.img`
  display: block;
`;