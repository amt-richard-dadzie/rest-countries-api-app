import styled from "styled-components";

export const CountryData = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  .img-area {
    max-width: 450px;
    max-height: 350px;

    img {
      width: 100%;
    }
  }

  .dt-area {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      margin: 0;
    }

    .data-basic {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-top: 20px;
    }

    p {
      margin: 7px 0;
      span {
        font-weight: 700;
      }
    }

    .light {
      font-weight: 400;
    }

    .data-border {
      margin-top: 20px;

      .borders {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin-top: 10px;
        grid-gap: 10px;
        width: 100%;
      }
      a {
        text-decoration: none;
        color: #000;
        display: flex;
        min-height: 27px;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.2);
      }
      p {
        font-weight: 700;
      }
    }
  }
`;
