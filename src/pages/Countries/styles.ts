import styled from "styled-components";

export const CountriesArea = styled.main`
  min-height: calc(100vh - 90px);
  padding: 0 40px;

  .countries {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 80px;
    grid-column-gap: 40px;
    margin-top: 20px;
  }
  .loading {
    height: 100vh;
  }

  @media (max-width: 430px) {
    padding: 0 25px;

    .countries {
      grid-template-columns: 1fr;
    }
  }
`;
