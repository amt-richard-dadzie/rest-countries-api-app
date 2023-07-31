import styled from "styled-components";

export const CountryData = styled.div`
  display: flex;
  gap: clamp(1.5rem, 7%, 5.5rem);

  img {
    width: 100%;
    max-width: 35rem;
    border-radius: 8px;
  }

  .dt-area {
    display: flex;
    flex-grow: 1;
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
        font-weight: 600;
      }
    }

    .light {
      font-weight: 300;
    }

    .data-border {
      margin-top: 20px;
      display: flex;
      gap: 10px;
      align-items: baseline;

      .borders {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 10px;
        flex-grow: 1;
      }
      a {
        text-decoration: none;
        color: #000;
        display: flex;
        min-height: 27px;
        justify-content: center;
        padding: 0 7px;
        align-items: center;
        text-align: center;
        font-size: 13px;
        box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.2);
      }
      p {
        font-weight: 600;
        flex-basis: 23%;
      }
    }
  }
  @media (max-width: 430px) {
    & {
      flex-direction: column;

      .dt-area {
        h1 {
          margin-top: 30px;
        }
        .data-basic {
          grid-template-columns: 1fr;

          .topLevel {
            margin-top: 30px;
          }
        }
        .data-border {
          margin-top: 30px;
          flex-direction: column;
          align-items: stretch;

          .borders {
            grid-template-columns: repeat(3, 1fr);
          }

          a {
            font-size: 13px;
          }
        }
      }
    }
  }
`;
