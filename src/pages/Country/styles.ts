import styled from "styled-components";

export const CountryPage = styled.main`
  height: calc(100vh - 90px);
  padding: 0 40px;

  .container {
    width: 100%;
    padding: 20px 0;
  }

  .btn-back {
    text-decoration: none;
    color: #000;
    font-weight: 600;
    box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.2);
    padding: 10px;
    width: 10%;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  @media (max-width: 430px) {
    & {
      height: auto;
      padding: 0 25px;
    }
    .btn-back {
      width: 35%;
    }
  }
`;
