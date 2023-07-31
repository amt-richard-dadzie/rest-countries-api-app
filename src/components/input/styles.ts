import styled from "styled-components";

export const InputArea = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;

  .inputField {
    display: flex;
    box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
    width: 30rem;
    align-items: center;
    padding-left: 15px;
    border-radius: 5px;
  }

  input {
    outline: none;
    width: 100%;
    border: none;
    padding: 15px 10px;
    font-size: 16px;
  }

  select {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
    font-size: 14px;
  }

  @media (max-width: 430px) {
    & {
      flex-direction: column;
      margin-inline: -10px;
      .inputField {
        width: 93%;
      }
      input {
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
