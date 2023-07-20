import styled from "styled-components";

export const Header = styled.header`
  height: 90px;
  padding: 0 40px;
  box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  p {
    display: flex;
    align-items: center;
    cursor: pointer;

    .text-right {
      margin-left: 7px;
      font-weight: 600;
    }
  }
  @media (max-width: 430px) {
    padding: 0 20px;
    height: 100%;
    h1 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }
`;
