import styled from "styled-components";

export const CountryCard = styled.div`
  background-color: #fff;
  box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.1);
  a {
    text-decoration: none;
    color: #000;
  }

  .flag {
    img {
      width: 100%;
      height: 220px;
      border-radius: 4px 4px 0 0;
    }
  }

  .data {
    padding: 0 20px;
    .country-name {
      font-size: 20px;
      font-weight: 900;
    }

    p {
      font-weight: 500;
      span {
        font-weight: 300;
      }
    }
  }
`;
