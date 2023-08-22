import styled from "styled-components";

export const SupplementSliderContainer = styled.section`
  display: flex;
  background: linear-gradient(
    143deg,
    rgba(188,148,248,1) 35%,
    rgba(180,138,238,0.55) 52%,
    rgba(162,114,228,1) 66%
  );
  max-width: 1340px;
  width: 100%;
  padding: 40px 150px;
  margin-inline: auto;
  border-radius: 10px;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  display: block;
  width: 45%;
`;

export const SupplementText = styled.div`
  color: #fff;
  font-family: "Inter", sans-serif;

  h1 {
    font-weight: 700;
    font-size: 38px;
  }

  p {
    font-size: 18px;
    font-size: 500;
  }
`;

export const RightSide = styled.div`
  position: relative;
  width: 45%;
  font-family: "Inter", sans-serif;
  color: #734baf;

  h1 {
    font-size: 32px;
    line-height: 38px;
    margin: 0;
  }

  p {
    font-size: 16px;
    margin: 0;
  }
`;

export const VitaminCard = styled.div`
  position: absolute;
  background-color: #fff;
  width: 230px;
  padding: 20px;
  border-radius: 10px;
  left: 0;
  bottom: 0;
`;

export const CapsuleImage = styled.img`
  display: block;
  position: absolute;
  width: 250px;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
`;

export const CapsuleCard = styled.div`
  position: absolute;
  background-color: #fff;
  width: 200px;
  padding: 20px;
  border-radius: 10px;
  right: 0;
  top: 0;
`;