import styled from "styled-components";

export const InputArea = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;

  input {
    width: 30rem;
    outline: none;
    border: none;
    padding: 15px 10px;
    border-radius: 2px;
    box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
    font-size: 16px;
  }

  select {
    border: none;
    outline: 0;
    padding: 10px;
    border-radius: 2px;
    box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
    font-size: 14px;
  }

  @media (max-width: 430px) {
    & {
      flex-direction: column;
      margin-inline: -10px;
      input {
        width: 93%;
        padding: 15px 10px;
      }
      select {
        margin-top: 30px;
        width: max-content;
        font-size: 12px;
        padding: 15px 30px;
      }
    }
  }
`;
