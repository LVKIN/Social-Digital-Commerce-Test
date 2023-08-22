import styled from "styled-components";

export const InfoCardContainer = styled.section`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  max-width: 1340px;
  margin: 50px auto 80px auto;

  > div {
    background-color: #d8fffb;
    padding: 15px 12px;
    justify-content: start;
    gap: 20px;
    border-radius: 10px;
  }

  img {
    width: 32px;
  }
`;
